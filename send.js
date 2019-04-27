const nodemailer = require('nodemailer');
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const myEmail = 'Your email';
const myPassowrd = 'Your email password';
const sendTo = ['Email to send'];

const source = fs.readFileSync(path.join(__dirname, 'test.hbs'), 'utf8');
const template = Handlebars.compile(source);

let transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: myEmail,
    pass: myPassowrd
  }
});

let mailOptions = {
  from: myEmail,
  to: sendTo,
  subject: 'Sending Email using Node.js',
  html: template(template)
};

transporter.sendMail(mailOptions, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log('Email sended');
  }
}); 