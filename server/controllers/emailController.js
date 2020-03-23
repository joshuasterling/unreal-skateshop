require("dotenv").config();

const nodemailer = require("nodemailer");

const { EMAIL, PASSWORD } = process.env;

const sendEmail = (req, res) => {
  if (!req.session.user) {
    return res.status(401);
  }
  const email = req.session.user.user_email;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  });

  let emailText = `Thanks for your purchase from Unreal Skateshop!`;

  let mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Unreal Skateshop - Purchase Confirmation",
    text: emailText
  };
  console.log(mailOptions);

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(409).send("Error Occurred");
    } else {
      res.status(200).send("Message Sent!");
    }
  });
};

module.exports = {
  sendEmail
};
