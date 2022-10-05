const { User, Follow, Article, } = require("../models/model");

exports.profile = async (req, res, next) => {
  try {
    const loginUser = req.user;
    const username = req.params.username;
    const user = await User.findOne({ username });

    if (!user) {
      const err = new Error("User not found");
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
}

exports.timeline = async (req, res, next) => {
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
}

exports.follower_list = async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username });
    const follows = await Follow.find({ following: user._id }, "follower")
    .populate("follower")
    
    setTimeout(() => {
      res.json(follows)
    }, 1000)

  } catch (error) {
    next(error)
  }
}

exports.following_list = async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username })
    const follows = await Follow.find({ follower: user._id }, "following")
    .populate("following")
    
    setTimeout(() => {
      res.json(follows)
    }, 1000)

  } catch (error) {
    next(error)
  }
}

exports.follow = async (req, res, next) => {
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
      res.end();
    }, 1000)

  } catch (error) {
    next(error)
  }
}

exports.unfollow = async (req, res, next) => {
  try {
    const loginUser = req.user;
    const username = req.params.username;
    const user = await User.findOne({ username });
    const follow = await Follow.findOne({ follower: loginUser._id, following: user._id });
    
    if (!follow) {
      const err = new Error("Follow not found");
      err.status = 400;
      return next(err);
    }

    await follow.delete();

    setTimeout(() => {
      res.end();
    }, 1000)

  } catch (error) {
    next(error)
  }
}