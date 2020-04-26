import React from "react";

const ProductFeedback = () => {
  return (
    <section className="feedback container feedback-f">
      <h3 className="feedback-title title-sub">Заказать пробную партию</h3>
      <p className="feedback-subtitle fb-st">
        Убедитесь в качестве продукции по ГОСТу от “МИКПРОМ”.
      </p>
      <span className="feedback-hint">* - поля, обязательные к заполнению</span>
      <form action="" className="feedback-forms">
        <div className="feedback-form-left">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form ml-name"> Имя <sup className="label-star">*</sup></span>
            <input type="text" className="feedback-form__input input-indent"/>
          </label>
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form ml-name"> Телефон <sup className="label-star">*</sup></span>
            <input type="tel" name="phone" className="feedback-form__input input-indent" />
          </label>
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form ml-name">e-mail</span>
            <input type="email" className="feedback-form__input input-indent" />
          </label>
        </div>
        <div className="feedback-form-right">
          <label htmlFor="" className="feedback-form__label">
          <span className="style-form mess">Cообщение</span>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="feedback-form__textarea input-indents"
            ></textarea>
          </label>
          <select name="" id="" className="feedback-form__select input-inden">
          <input type="text" placeholder="Заказать партию/получить прайс"/>
          <option selected value="s1"></option>
          <option value="s2">Заказать партию</option>
          <option value="s3">Получить прайс</option>
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
