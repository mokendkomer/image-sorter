const fs = require('fs');
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    const file = fs.readdirSync('./public')[0]
    res.render(`index.ejs`, {file})
  })
  app.post('/ez', function(req, res){
    const oldPath = `./public/${fs.readdirSync('./public')[0]}`
    const newPath = `./${req.body.type}/${fs.readdirSync('./public')[0]}`
    fs.rename(oldPath, newPath, err => {
      if(err)
        console.log(err)
    })
    const file = fs.readdirSync('./public')[1]
    console.log(file)
    res.render(`index.ejs`, {file})
});
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
