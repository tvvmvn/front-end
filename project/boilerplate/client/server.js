const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname)

// express.static()
app.use('/static', express.static(path.resolve(__dirname, 'public')));

// app.get('/something', (req, res) => {
//   res.send('something is')
// })

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(process.env.PORT || 3001, () => console.log('Server running...'));
