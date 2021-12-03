var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

router.post('/new', (req, res, next) => {
  messages.unshift({
    text: req.body.messageText,
    user: 'Amando',
    added: new Date(),
  });
  res.redirect('/');
});
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

module.exports = router;
