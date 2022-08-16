const express = require("express");
const app = express();
const port = 3000;

const passport = require("passport");
const auth = passport.authenticate("jwt", { session: false });
require("./auth/passportJwt");
const passportGoogle = require("./auth/google");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const fs = require("fs");
const formidable = require("formidable");

const crypto = require("crypto");
const { sendEmail } = require("./utils/nodemailer");

// # MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static("public", {
  dotfiles: "ignore",
  etag: true,
  extensions: [],
  index: false,
  lastModified: true,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  }
}));
app.use(express.static("data"));

// # DATABASE
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/boilerplate", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const {
  User, Follow, Article, 
  Favorite, Comment, Token, 
  FavoriteComment 
} = require("./models/model");

const seed = require("./seed.js");

// # ROUTES
app.get("/", async (req, res, next) => {
  try {
    res.json({ message: "hello express" })
  } catch (error) {
    next(error)
  }
})

// Test
app.post("/test", auth, async (req, res, next) => {
  try {
    const SAFEtoken = "bunny"

    if (!req.body.CSRFtoken || req.body.CSRFtoken !== SAFEtoken) {
      console.log("CSRF!")
    } else {
      console.log(req.body)
    }
  } catch (error) {
    next(error)
  }
})

// Auth
app.get("/user", auth, async (req, res, next) => {
  try {
    setTimeout(() => {
    }, 1000)
    res.json(req.user);

  } catch (error) {
    next(error)
  }
})

// Login
app.post("/user/login", async (req, res, next) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({ email: email, active: true });

    if (!user) {
      const err = new Error("Authentication failed");
      err.status = 401;
      return next(err);
    }

    const hashedPassword = crypto.pbkdf2Sync(password, user.salt, 310000, 32, "sha256")
    .toString("hex")
    
    if (user.password !== hashedPassword) {
      const err = new Error("Authentication failed");
      err.status = 401;
      return next(err);
    }

    const token = jwt.sign({ username: user.username }, "shhhhh");

    setTimeout(() => {
      res.json({ user, token })
    }, 1000)

  } catch (error) {
    next(error)
  }
})

// OAuth
app.get("/auth/google", 
  passport.authenticate("google", { scope: ["profile"] })
);

app.get("/auth/google/callback", 
  passport.authenticate("google", { 
    session: false, 
    failureRedirect: "/login" 
  }),
  (req, res, next) => {
    try {
      const token = jwt.sign({ username: req.user.username }, "shhhhh")
      res.json({ message: "login success", token: token })
    } catch (error) {
      next(error)
    }
  }
);

// Sign up
app.post("/users", async (req, res, next) => {
  try {
    const {username, password, email} = req.body;

    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 310000, 32, "sha256")
    .toString("hex")

    const user = new User({
      username,
      email,
      password: hashedPassword,
      salt: salt
    })

    await user.save();

    const jwt = new Token({
      user: user._id,
      token: crypto.randomBytes(32).toString("hex")
    })

    await jwt.save();

    const link = `http://localhost:3001/users/${user._id}/${jwt.token}`

    sendEmail(email, link)
    res.json({ message: "We send an email for verification." })

  } catch (error) {
    next(error)
  }
})

app.get("/users/:userId/:token", async (req, res, next) => {
  try {
    const {userId, token} = req.params;

    const user = await User.findById(userId);
    const signupToken = await Token.findOne({ token });

    if (!user) {
      const err = new Error("User not found");
      err.status = 401;
      return next(err)
    }

    if (!signupToken) {
      const err = new Error("Wrong or expired token.");
      err.status = 400;
      return next(err);
    }

    user.active = true;

    await user.save();

    await signupToken.delete();

    const loginToken = jwt.sign({ username: user.username }, "shhhhh");
    res.json({ message: "Signup completed", token: loginToken });

  } catch (error) {
    next(error)
  }
})

// Signup validation
app.get("/validate/username", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.query.value, active: true })
    
    setTimeout(() => {
    }, 1000)
    res.json(user)

  } catch (error) {
    next(error)
  }
})

app.get("/validate/email", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.query.value, active: true })
    
    setTimeout(() => {
    }, 1000)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

// Profile
app.get("/profiles/:username", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const username = req.params.username;
    const user = await User.findOne({ username });

    if (!user) {
      const err = new Error("User not found")
      err.status = 404;
      return next(err);
    }

    const following = await Follow.findOne({ follower: loginUser._id, following: user._id })
    const followingCount = await Follow.countDocuments({ follower: user._id })
    const followersCount = await Follow.countDocuments({ following: user._id })
    const articlesCount = await Article.countDocuments({ user: user._id })

    const profile = {
      username: user.username,
      bio: user.bio,
      image: user.image,
      isFollowing: following ? true : false,
      followersCount,
      followingCount,
      articlesCount
    }

    setTimeout(() => {
      res.json(profile);
    }, 1000)

  } catch (error) {
    next(error)
  }
})

// Profile Timeline
app.get("/profiles/:username/articles", auth, async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username });

    if (!user) {
      const err = new Error("User not found")
      err.status = 404;
      return next(err);
    }

    const articles = await Article.find({ user: user._id })
    .sort([["created", "descending"]]).populate("user")
    .skip(req.query.skip)
    .limit(req.query.limit);

    setTimeout(() => {
      res.json(articles);
    }, 1000)

  } catch (error) {
    next(error)
  }
})

// Profile Edit
app.post("/accounts/edit", auth, async (req, res, next) => {
  try {    
    const loginUser = req.user;
    const user = await User.findById(loginUser._id);
    const bio = req.body.bio;
  
    user.bio = bio;
    await user.save();
  
    setTimeout(() => {
      res.json(user.bio)
    }, 1000)

  } catch (error) {
    next(error)
  }
})

app.post("/accounts/edit/image", auth, async (req, res, next) => {
  const form = formidable({});
  
  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        return next(err);
      }

      const loginUser = req.user;
      const user = await User.findById(loginUser._id);
      const image = files.image;

      const oldpath = image.filepath;
      const ext = image.originalFilename.split(".")[1]
      const newName = image.newFilename + "." + ext;
      const newpath = __dirname + "/data/users/" + newName;

      fs.renameSync(oldpath, newpath);

      user.image = newName;
      await user.save();
      
      setTimeout(() => {
        res.json(newName);
      }, 1000)

    } catch (error) {
      next(error)
    }
  })
})

app.delete("/accounts/edit/image", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const user = await User.findById(loginUser._id);

    user.image = null;
    await user.save();

    setTimeout(() => {
      res.end();
    }, 1000)

  } catch (error) {
    next(error)
  }
})

// Follow and Unfollow
app.post("/profiles/:username/follow", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const username = req.params.username;
    const user = await User.findOne({ username })
    const follow = await Follow.findOne({ follower: loginUser._id, following: user._id })

    if (follow) {
      const err = new Error("Already follow");
      err.status = 400;
      return next(err)
    }

    const newFollow = new Follow({
      follower: loginUser._id,
      following: user._id
    })

    await newFollow.save();

    setTimeout(() => {
    }, 1000)
    res.end();

  } catch (error) {
    next(error)
  }
})

app.delete("/profiles/:username/follow", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const username = req.params.username;
    const user = await User.findOne({ username });
    const follow = await Follow.findOne({ follower: loginUser._id, following: user._id });
    
    await follow.delete();

    setTimeout(() => {
    }, 1000)
    res.end();

  } catch (error) {
    next(error)
  }
})

// Follower and following list
app.get("/profiles/:username/followers", auth, async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username });
    const follows = await Follow.find({ following: user._id }, "follower")
    .populate("follower")
    
    setTimeout(() => {
    }, 1000)
    res.json(follows)

  } catch (error) {
    next(error)
  }
})

app.get("/profiles/:username/following", auth, async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username })
    const follows = await Follow.find({ follower: user._id }, "following")
    .populate("following")
    
    setTimeout(() => {
    }, 1000)
    res.json(follows)

  } catch (error) {
    next(error)
  }
})

// Feed
app.get("/feed", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const follows = await Follow.find({ follower: loginUser._id });

    const articles = await Article
    .find({ user: [...follows.map(follow => follow.following), loginUser._id]
    })
    .sort([["created", "descending"]])
    .populate("user")
    .skip(req.query.skip)
    .limit(req.query.limit)
    .lean();

    for (let article of articles) {
      const favorite = await Favorite.findOne({ user: loginUser._id, article: article._id })      
      article.isFavorite = favorite ? true : false;
    }

    setTimeout(() => {
      res.json(articles)
    }, 1000)

  } catch (error) {
    next(error)
  }
})

// Articles
app.get("/articles", auth, async (req, res, next) => {
  try {
    const articles = await Article.find()
    .sort([["created", "descending"]]).populate("user")
    .skip(req.query.skip)
    .limit(req.query.limit);

    setTimeout(() => {
      res.json(articles);
    }, 1000)

  } catch (error) {
    next(error)
  }
})

// Article
app.get("/articles/:id", auth, async (req, res, next) => {
  try {    
    const loginUser = req.user;
    const id = req.params.id;
    const article = await Article.findById(id).populate("user").lean();    
    
    if (!article) {
      const err = new Error("Article not found")
      err.status = 404;
      return next(err);
    }

    const favorite = await Favorite.findOne({ user: loginUser._id, article: article._id })      
    
    article.isFavorite = favorite ? true : false;

    setTimeout(() => {
      res.json(article);
    }, 1000)

  } catch (error) {
    next(error)
  }
})

app.post("/articles", auth, async (req, res, next) => {
  
  const form = formidable({ multiples: true });
  
  form.parse(req, async (err, fields, files) => {
    try { 
      const loginUser = req.user;

      if (err) {
        return next(err);
      }

      const photos = files.photos instanceof Array ? files.photos : new Array(files.photos);

      if (!photos[0].originalFilename) {
        const err = new Error("Image must be specified");
        err.status = 400;
        return next(err);
      }

      // image validation check needed
      // ...

      const photoList = photos.map(photo => {
        const oldpath = photo.filepath;
        const ext = photo.originalFilename.split(".")[1]
        const newName = photo.newFilename + "." + ext;
        const newpath = __dirname + "/data/posts/" + newName;

        fs.renameSync(oldpath, newpath);

        return newName;
      })
          
      const article = new Article({
        description: fields.description,
        photos: photoList,
        user: loginUser._id
      })
      await article.save();

      setTimeout(() => {
        res.json(photoList)
      }, 1000)

    } catch (error) {
      next(error)
    }
  });
})

app.put("/articles/:id", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id;
    const description = req.body.description;
    const article = await Article.findById(id);

    if (article.user.toString() !== loginUser._id.toString()) {
      const err = new Error("User not match")
      err.status = 400;
      return next(err)
    }
        
    article.description = description;
    article.updated = Date.now();

    await article.save();

    setTimeout(() => {
      res.json({ article });
    }, 1000)

  } catch (error) {
    next(error)
  }
})

app.delete("/articles/:id", auth, async (req, res, next) => {
  try {
    const id = req.params.id;
    const article = await Article.findById(id);
    
    await article.delete();
    
    setTimeout(() => {
    }, 1000)
    res.end();

  } catch (error) {
    next(error)
  }
})

// Favorite and unfavorite article
app.post("/articles/:id/favorite", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id;
    const article = await Article.findById(id)
    const favorite = await Favorite.findOne({ user: loginUser._id, article: article._id })

    if (favorite) {
      const err = new Error("Already favorite article");
      err.status = 400;
      return next(err)
    }

    const newFavorite = new Favorite({
      user: loginUser._id,
      article: article._id
    })

    await newFavorite.save();

    article.favoriteCount++;

    await article.save();

    setTimeout(() => {
    }, 1000)
    res.end();

  } catch (error) {
    next(error)
  }
})

app.delete("/articles/:id/favorite", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id
    const article = await Article.findById(id)
    const favorite = await Favorite.findOne({ user: loginUser._id, article: article._id })

    if (!favorite) {
      const err = new Error("No article to unfavorite");
      err.status = 400;
      return next(err)
    }

    await favorite.delete();

    article.favoriteCount--;
    await article.save();

    setTimeout(() => {
    }, 1000)
    res.end();

  } catch (error) {
    next(error)
  }
})

// Comments
app.get("/articles/:id/comments", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id;
    const comments = await Comment.find({ article: id })
    .populate("user")
    .sort([["created", "descending"]])
    .limit(req.query.limit)
    .skip(req.query.skip)
    .lean();

    for (let comment of comments) {
      const favoriteComment = await FavoriteComment
      .findOne({ user: loginUser._id, comment: comment._id });

      comment.isFavorite = favoriteComment ? true : false;
    }
    
    setTimeout(() => {
      res.json(comments);
    }, 1000)

  } catch (error) {
    next(error)
  }
})

app.post("/articles/:id/comments", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id;
    const content = req.body.content;

    const comment = new Comment({
      article: id,
      content: content,
      user: loginUser._id
    })

    await comment.save();

    setTimeout(async () => {
      res.json(await comment.populate("user"));
    }, 1000);

  } catch (error) {
    next(error)
  }
})

app.delete("/comments/:id", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id;
    const comment = await Comment.findById(id);

    if (loginUser._id.toString() !== comment.user.toString()) {
      const err = new Error("User not match")
      err.status = 400;
      return next(err);
    }

    await comment.delete();

    setTimeout(() => {
      res.end();
    }, 1000)

  } catch (error) {
    next(error)
  }
})

// Comment Favorite and unfavorite
app.post("/comments/:id/favorite", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id;
    const comment = await Comment.findById(id);
    const favoriteComment = await FavoriteComment
    .findOne({ user: loginUser._id, comment: comment._id });

    if (favoriteComment) {
      const err = new Error("Already favorite comment");
      err.status = 400;
      return next(err)
    }

    const newFavoriteComment = new FavoriteComment({
      user: loginUser._id,
      comment: comment._id
    })

    await newFavoriteComment.save();

    comment.favoriteCount++

    await comment.save();

    setTimeout(() => {
    }, 1000)
    res.end();

  } catch (error) {
    next(error)
  }
})

app.delete("/comments/:id/favorite", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id;
    const comment = await Comment.findById(id)
    const favoriteComment = await FavoriteComment
    .findOne({ user: loginUser._id, comment: comment._id });

    if (!favoriteComment) {
      const err = new Error("No comment to unfavorite");
      err.status = 400;
      return next(err)
    }

    await favoriteComment.delete();

    comment.favoriteCount--;
    await comment.save();

    setTimeout(() => {
    }, 1000)
    res.end();

  } catch (error) {
    next(error)
  }
})

// Search 
app.get("/search", auth, async (req, res, next) => {
  try {
    const username = req.query.username;
    const patt = new RegExp("^" + username);
    const users = await User.find({
      username: {$regex: patt}
    });

    setTimeout(() => {
      res.json(users);
    }, 1000)

  } catch (error) {
    next(error)
  }
})

// # ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);

  setTimeout(() => {
    res.status(err.status || 500).json(err); 
  }, 1000)
})

// # SERVER RUNNING MESSAGE
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

