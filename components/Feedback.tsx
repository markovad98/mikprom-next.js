import React from "react";

const Feedback = () => {
  return (
    <section className="feedback container">
      <h3 className="feedback-title">Форма обратной связи</h3>
      <p className="feedback-subtitle">
        Заполните форму обратной связи и получите ответы на свои вопросы
      </p>
      <span className="feedback-hint">* - поля, обязательные к заполнению</span>
      <form action="" className="feedback-form">
        <div className="feedback-form-left">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form"> Имя <sup className="label-star">*</sup></span>
            <input type="text" className="feedback-form__input" />
          </label>
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form">e-mail<sup className="label-star">*</sup></span>
            <input type="text" className="feedback-form__input" />
          </label>
          <button className="feedback-form-button">Отправить</button>
        </div>
        <div className="feedback-form-right">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form mess">Cообщение<sup className="label-star">*</sup></span>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="feedback-form__textarea"
            ></textarea>
          </label>
          <select name="" id="" className="feedback-form__select">
              <option disabled selected hidden>Выберите тему сообщения</option>
              <option>Выберите тему сообщения</option>
              <option>Выберите тему сообщения</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default Feedback;
