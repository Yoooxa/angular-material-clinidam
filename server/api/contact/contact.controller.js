
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
    to: "lea.deschamps@ynov.com, arthur.lannelucq@ynov.com, tcharlyson.platel@ynov.com, benjamin.condom@ynov.com",
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


export function sendValidationAccountMail(req, res) {
  var data = req.body;

  var mail = {
    from: "angularclinidam@gmail.com",
    to: req.body.email,
    subject: "CliniDAM : Votre compte est désormais utilisable sur la plateforme !",
    html: `
    <p> Bonne nouvelle: <span style="font-weight: bold;">votre compte vient d'être validé par un administrateur</span>, et vous pouvez désormais vous connecter dessus ! </p>
    <br/>
    <p> A très bientôt !</p>
    <br/>
    <br/>
    <p>L'équipe CLiniDAM</p>
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
