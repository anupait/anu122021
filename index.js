var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var bodyParser = require('body-parser')
var express = require('express')

var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', csrfProtection,function (req, res) {
  res.send({ csrfToken: req.csrfToken() });
})

app.post('/process',parseForm,csrfProtection, function (req, res) {
 res.send('I am under process route'+ JSON.stringify(req.body));
});

app.listen(5000, function () {
  console.log('Listening to Port 5000');
  console.log('This is first message');
  console.log('This is second message from local copy');
  console.log('This is third message from git copy');
  console.log('This is fourth message from local copy');
  console.log('This is fifth message from git copy');
});
