const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
//const { email, password } = functions.config().gmail;
const mailTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "placeholder",
      pass: "placeholder",
    },
  });

exports.sendOrderEmail = functions.firestore
    .document('orders/{orderId}')
    .onCreate((snap, context) => {

          const data = snap.data();

          const mailOptions = {
            from: 'foundrybjjsales@gmail.com',
            replyTo: 'foundrybjjsales@gmail.com',
            to: 'foundrybjjshop@gmail.com',
            subject: `**NEW ORDER** ${data.cust_name} - ${data.item}(x${data.qty})`,
            
            html: data.item,
          };
    
        mailTransport.sendMail(mailOptions);
        return null;
    });
