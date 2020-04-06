import React from "react";

const Feedback = () => {
  return (
    <section className="feedback container">
      <h3 className="feedback-title">Заказать пробную партию</h3>
      <p className="feedback-subtitle">
        Убедитесь в качестве продукции по ГОСТу от “МИКПРОМ”.
      </p>
      <span className="feedback-hint">* - поля, обязательные к заполнению</span>
      <form action="" className="feedback-form">
        <div className="feedback-form-left">
          <label htmlFor="" className="feedback-form__label">
            Имя <span className="label-star">*</span>
            <input type="text" className="feedback-form__input" />
          </label>
          <label htmlFor="" className="feedback-form__label">
            email <span className="label-star">*</span>
            <input type="text" className="feedback-form__input" />
          </label>
          <button className="feedback-form-button">Отправить</button>
        </div>
        <div className="feedback-form-right">
          <label htmlFor="" className="feedback-form__label">
            сообщение <span className="label-star">*</span>
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
              <option>Выберите тему сообщения12</option>
              <option>Выберите тему сообщения34</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default Feedback;
