// Dependencies to install:
// $ npm install node-fetch --save

const fetch = require('node-fetch');

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer pk_prod_CP1MQ30JPY4BEVNKJXJAMKRSTA98'
  },
  body: JSON.stringify({
    "message": {
      "to": {
        "email": "tapaswinitripathy15@gmail.com"
      },
      "content": {
        "title": "new subject",
        "body": "message"
      },
      "routing": {
        "method": "single",
        "channels" : ["email","sms"]
      },
    }
  })
};

fetch('https://api.courier.com/send', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));