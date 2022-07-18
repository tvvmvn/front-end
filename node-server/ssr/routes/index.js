var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('data/', (err, posts) => {
    if (err) {
      return next(err)
    };
    res.render('blog_list', { title: 'Blogs', posts });
  })
});

// About
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// Create
router.get('/create', function(req, res, next) {
  res.render('blog_form', { title: 'Blog Form' });
});

router.post('/create', function(req, res, next) {

  fs.readdir('data/', (err, posts) => {
    if (err) {
      return next(err)
    };
    
    const post = posts.find(post => post.split(".")[0] === req.body.title);

    if (post) {
      return next(new Error("Title must be unique"))
    }

    fs.writeFile(`data/${req.body.title}.txt`, req.body.content, (err) => {
      if (err) {
        return next(err)
      }
      res.redirect('/');
    })
  })
});

// Read
router.get('/p/:postId', (req, res, next) => {
  fs.readFile(`data/${req.params.postId}`, (err, content) => {
    if (err) {
      return next(err)
    }
    const post = { title: req.params.postId, content }
    res.render('blog_detail', { title: 'Blog', post })
  })
})

// Update
router.get('/p/:postId/update', (req, res, next) => {
  fs.readFile(`data/${req.params.postId}`, (err, content) => {
    if (err) {
      return next(err)
    }
    const post = { title: req.params.postId, content }
    res.render('blog_form', { title: 'Blog', post })
  })
})

router.post('/p/:postId/update', (req, res, next) => {
  fs.writeFile(`data/${req.body.title}.txt`, req.body.content, (err) => {
    if (err) { 
      return next(err) 
    }
    res.redirect(`/p/${req.body.title}.txt`);
  })
})

// Delete
router.post('/p/:postId/delete', (req, res, next) => {
  fs.unlink(`data/${req.params.postId}`, (err) => {
    if (err) {
      return next(err)
    }
    res.end()
  })
})

router.post('/attack', (req, res, next) => {
  console.log(req.body)
})

module.exports = router;
