const nodemailer = require("nodemailer");

const transport = {
    host: "smtp.mailtrap.io",
    port: 2525,
    //service: "gmail,"
    auth: {
        user: "987791c40d10f0",
        pass: "1ec3e4a5332fef"
        // se for gmail, usar login e senha
    }
}


module.exports = {
    enviar: (req, res) => {
        // Criar o transporter
        const transporter = nodemailer.createTransport(transport);

        // Criando email 
        const email = {
            from: "ericasugui@gmail.com",
            to:  req.body.dest,
            subject: req.body.subj,
            text: req.body.msg,
            //html: "<h1>Mensagem em html, passaria o readFile aqui.</h1>"
        }

        // Enviar email
        transporter.sendMail(email,
            (error, info) => {
                if (error) {
                    console.log(error);
                    console.log(info);
                    res.send("deu erro!");
                } else {
                    console.log(info);
                    res.send("deu certo")
                }
            })
        //res.send("Tentando enviar email ...");
    }
}