import React from "react";
import unfetch from "unfetch";
import ym from "react-yandex-metrika";

const Feedback = () => {

    const hit = () => {
        ym("56385712",'reachGoal','Opt')
    }

  return (
    <section className="feedback container">
      <h3 className="feedback-title">Форма обратной связи</h3>
      <p className="feedback-subtitle">
        Заполните форму обратной связи и получите ответы на свои вопросы
      </p>
      <span className="feedback-hint">* - поля, обязательные к заполнению</span>
      <form action="/api/contact" method={"POST"} onSubmit={() => {
          unfetch("api/contact", {
              method: "post",
              body: JSON.stringify({
                  name: "Alex1123"
              })
          })
      }} className="feedback-form">
        <div style={{
            display: "flex",
        }}>
          <div className="feedback-form-left">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form"> Имя <sup className="label-star">*</sup></span>
            <input type="text" name="name" className="feedback-form__input" />
          </label>
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form">e-mail<sup className="label-star">*</sup></span>
            <input type="text"name="mail" className="feedback-form__input" />
          </label>
        </div>
        <div className="feedback-form-right">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form mess">Cообщение<sup className="label-star">*</sup></span>
            <textarea
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
          <div style={{
              display: "flex",
              width: "100%"
          }}>
              <button type="submit" className="feedback-form-button" onClick={hit}>Отправить</button>
          </div>
      </form>
    </section>
  );
};

export default Feedback;
