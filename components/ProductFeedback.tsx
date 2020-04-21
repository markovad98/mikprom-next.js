import React from "react";

const ProductFeedback = () => {
  return (
    <section className="feedback container feedback-f">
      <h3 className="feedback-title title-sub">Заказать пробную партию</h3>
      <p className="feedback-subtitle">
        Убедитесь в качестве продукции по ГОСТу от “МИКПРОМ”.
      </p>
      <span className="feedback-hint">* - поля, обязательные к заполнению</span>
      <form action="" className="feedback-forms">
        <div className="feedback-form-left">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form"> Имя <sup className="label-star">*</sup></span>
            <input type="text" className="feedback-form__input"/>
          </label>
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form"> Телефон <sup className="label-star">*</sup></span>
            <input type="tel" name="phone" className="feedback-form__input" />
          </label>
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form">e-mail</span>
            <input type="email" className="feedback-form__input" />
          </label>
        </div>
        <div className="feedback-form-right">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form">Cообщение</span>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="feedback-form__textarea"
            ></textarea>
          </label>
          <select name="" id="" className="feedback-form__select">
          <input type="text" placeholder="Заказать партию/получить прайс"/>
              
          </select>
        </div>
      </form>
       <div className="feedback-btn">
          <button className="craft-btn">Отправить</button>
        </div>
    </section>
  );
};

export default ProductFeedback;
