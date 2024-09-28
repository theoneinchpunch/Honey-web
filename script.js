const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
   let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: 'your-email@gmail.com',
         pass: 'your-email-password'
      }
   });

   let mailOptions = {
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com',
      subject: 'Product Interest',
      text: 'Someone clicked the Buy button for the product!'
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return res.status(500).send('Error sending email');
      }
      res.status(200).send('Email sent: ' + info.response);
   });
});

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
