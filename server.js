const express = require('express');

const app = express();

app.get('/api/info', (req, res) => {
  res.json({
    name: 'timg',
    sex: '女',
    message: '好看'
  })
})

app.listen("9092")