const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())

app.listen(8000, () => {
  console.log('Server started!')
});

app.route('/api/cats').get((req, res) => {
  res.send({
     cats: [{ name: 'lily' }, {name: 'lucy' }]
  })
});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({ name: requestedCatName});
});

app.route('/api/cats').post((req, res) => {
  res.send(201, req.body);
});

app.route('/api/cats/:name').put((req, res)=> {
  res.send(200, req.body);
});

app.route('/api/cats/:name').delete((req, res) => { 
  res.sendStatus(204);
})

var corsOptions = {
  origin: 'http://example.com',
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));
