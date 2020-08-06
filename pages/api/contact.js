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

    const { email, phone, name, message: msg, companyName, fullName } = req.body;

    const message = {
        from: "Заявка с сайта Mikprom <markovalexeydmit@gmail.com>",
        to: "info@mikprom.ru",
        subject: "Новая заявка",
        text: `
        *Данные пришедшие с формы зависят от формы, с которой пришла заявка*
        *К примеру, если есть поля "Имя компании" значит данные пришли с формы расположенной на странице "Парнерам"*
        Имя закупщика: ${name}
        Телефон: ${phone}
        Почта ${email}
        Сообщение: ${msg}
        Имя компании: ${companyName}
        Полное имя: ${fullName}
        `
        ,
    }

    mailer(message)
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
        msg: req.body
    }))
}