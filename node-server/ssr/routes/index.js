var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('data/', (err, posts) => {
    res.render('blog_list', { title: 'Blogs', posts });
  })
});

router.get('/new', function(req, res, next) {
  res.render('blog_form', { title: 'Blog Form' });
});

router.post('/new', function(req, res, next) {
  fs.appendFile(`data/${req.body.title}.txt`, req.body.content, (err) => {
    if (err) throw err;
    res.redirect('/');
  })
});

router.get('/post/:postId', (req, res, next) => {
    fs.readFile(`data/${req.params.postId}`, (err, content) => {
      if (err) throw err;
      const post = { title: req.params.postId, content }
      res.render('blog_detail', { title: 'Blog', post })
    })
})

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});


module.exports = router;
