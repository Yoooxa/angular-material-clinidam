
'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    user: "angularclinidam@gmail.com",
    pass: "cliniDAM-angular"
  }
});

export function sendMail(req, res) {

  var data = req.body;

  var mail = {
    from: "angularclinidam@gmail.com",
    to: "angularclinidam@gmail.com",
    subject: "CliniDAM : Nouveau message de " + data.contactEmail + " !",
    html: `
    <p> Sujet du mail : <span style="font-weight: bold"> ${data.subject} </span> </p>
    <br/>
    <p> Message : </p>
    <p>
      ${data.message}
    </p>
    `
  }

  transporter.sendMail(mail, function(error, response) {
    if (error) {
      console.log("Erreur lors de l'envoi du mail ...");
      console.log(error);
    } else {
      console.log("Mail envoyé avec succès !");
    }

    transporter.close();
  });

  res.json({data: data});
}

export function sendMailToSupport(req, res) {
  var data = req.body;

  var mail = {
    from: "angularclinidam@gmail.com",
    to: "lea.deschamps@ynov.com, arthur.lannelucq@ynov.com",
    subject: "CliniDAM support : " + data.subject,
    html: `
    <p> Sujet du mail : <span style="font-weight: bold"> ${data.subject} </span> </p>
    <br/>
    <p> Message : </p>
    <p>
      ${data.message}
    </p>
    `
  };

  transporter.sendMail(mail, function(error, response) {
    if (error) {
      console.log("Erreur lors de l'envoi du mail ...");
      console.log(error);
    } else {
      console.log("Mail envoyé avec succès !");
    }

    transporter.close();
  });

  res.json({data: data})
}
