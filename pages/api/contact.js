const nodemailder = require("nodemailer")

const transporter = nodemailder.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'markovalexeydmit@gmail.com',
        pass: '6QmpZ1mvzm'
    }
})

const mailer = msg => {
    transporter.sendMail(msg, (err, info) => {
        if (err) return console.log(err);
        console.log("YE! ", info);
    })
}

export default function contact(req, res) {
    const { email, phone, name } = req.body;

    const message = {
        from: "Заявка с сайта Mikprom <markovalexeydmit@gmail.com>",
        to: "info@mikprom.ru",
        subject: "Новая заявка",
        text: `
        Имя закупщика: ${name}
        Телефон: ${phone}
        Почта ${email}
        `,
    }

    mailer(message)
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
        msg: req.body
    }))
}