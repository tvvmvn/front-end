var express = require('express');
var router = express.Router();
var fs = require('fs');
const { v4: uuidv4 } = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('data/', (err, posts) => {
    res.render('blog_list', { title: 'Blogs', posts });
  })
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// Create
router.get('/create', function(req, res, next) {
  res.render('blog_form', { title: 'Blog Form' });
});

router.post('/create', function(req, res, next) {
  fs.appendFile(`data/${req.body.title}.txt`, req.body.content, (err) => {
    if (err) {
      return console.error(err)
    }
    res.redirect('/');
  })
});

// Read
router.get('/p/:postId', (req, res, next) => {
    fs.readFile(`data/${req.params.postId}`, (err, content) => {
      if (err) {
        return console.error(err)
      }
      const post = { title: req.params.postId, content }
      res.render('blog_detail', { title: 'Blog', post })
    })
})

// Update
router.get('/p/:postId/update', (req, res, next) => {
  fs.readFile(`data/${req.params.postId}`, (err, content) => {
    if (err) {
      return console.error(err)
    }
    const post = { title: req.params.postId, content }
    res.render('blog_form', { title: 'Blog', post })
  })
})

router.post('/p/:postId/update', (req, res, next) => {
  fs.rename(`data/${req.body.ex_title}`, `data/${req.body.title}.txt`, (err, content) => {
    if (err) { return console.error(err) }

    fs.writeFile(`data/${req.body.title}.txt`, req.body.content, (err) => {
      if (err) { return console.error(err) }
      res.redirect(`/p/${req.body.title}.txt`);
    })
  })
})

// Delete
router.post('/p/:postId/delete', (req, res, next) => {
    fs.unlink(`data/${req.params.postId}`, (err) => {
      if (err) {
        return console.error(err)
      }
      res.json({ message: 'success' })
    })
})

module.exports = router;
