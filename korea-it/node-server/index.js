const express = require('express');
const path = require('path')
const app = express();
const port = 3004;

// ㄸxpress에서 정적 파일 제공
app.use('/static', express.static(path.resolve(__dirname, 'public')));

// app.get('/static/js/script.js', (req, res) => {
//   res.send('...')
// })

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


app.listen(port, () => {
  console.log('Example app listening on port ' + port)
})