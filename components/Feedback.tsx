import React, {useState} from "react";
import ym from "react-yandex-metrika";
import axios from "axios";

const Feedback = () => {
    const [isLoading, setIsloading] = useState(false);
    const [form, setForm] = useState<any>({
        name: "",
        message: "",
        email: "",
    })

    const changeForm = (key: string) => (e: any) => {
        e.persist();
        setForm((prevState: any) => ({ ...prevState, [key]: e?.target?.value}))
    }

    const hit = () => {
        ym("56385712",'reachGoal','Opt')
    }

    const sendOnMail = () => {
        setIsloading(true);
        axios.post("/api/contact", form)
            .then(() => setForm({
                name: "",
                message: "",
                email: "",
            })).catch(() => setForm({
            name: "",
            message: "",
            email: "",
        })).finally(() => setIsloading(false))
    }

  return (
    <section className="feedback container">
      <h3 className="feedback-title">Форма обратной связи</h3>
      <p className="feedback-subtitle">
        Заполните форму обратной связи и получите ответы на свои вопросы
      </p>
      <span className="feedback-hint">* - поля, обязательные к заполнению</span>
      <form action="/api/contact" method={"POST"} onSubmit={(e: any) => {
          e.preventDefault();
          sendOnMail();
      }} className="feedback-form">
        <div className="feedback-form-columns">
          <div className="feedback-form-left">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form"> Имя <sup className="label-star">*</sup></span>
            <input type="text" value={form.name} onChange={changeForm("name")} name="name" className="feedback-form__input" />
          </label>
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form">E-mail<sup className="label-star">*</sup></span>
            <input type="text"name="email" value={form.email}  onChange={changeForm("email")} className="feedback-form__input" />
          </label>
        </div>
        <div className="feedback-form-right">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form mess">Cообщение<sup className="label-star">*</sup></span>
            <textarea
                value={form.message}
                onChange={changeForm("message")}
              name="text"
              id=""
              cols={30}
              rows={10}
              className="feedback-form__textarea"
            ></textarea>
          </label>
        </div>
        </div>
          <div className="new-feedback-hint">
              Нажимая на кнопку “отправить” вы даётё согласие на обработку ваших персональных данных. Мы гарантируем использование ваших данных только для осуществления обратной связи.
          </div>
          <div className="feedback-form-button-container">
              <button type="submit" className="feedback-form-button" onClick={hit}>{ isLoading ? "Отправка..." : "Отправить"}</button>
          </div>
      </form>
    </section>
  );
};

export default Feedback;
