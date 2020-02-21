var express = require('express')
const nodemailer = require('nodemailer');
var app = express()

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "seu@gmail.com",
        pass: "sua senha"
    }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function(request, response, next){
    console.log(request.body);

    console.log(request.body.user.name);
    console.log(request.body.user.email);
    console.log(request.body.user.message);

    const { name,email,message } = request.body.user;

const mailOptions = {
    from: 'seu@gmail.com',
    to: 'email@destino.com',
    subject: 'Email from douglascarlos.dev',
    html: `Nome: ${name} <br>Email: ${email} <br>${message}`
};

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });

    response.setHeader('Content-Type', 'text/html');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('<div class="alert alert-success">Mensagem enviada com sucesso.</div>');
});

app.listen(3000)
