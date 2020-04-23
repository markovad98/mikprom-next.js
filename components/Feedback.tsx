import React from "react";

const Feedback = () => {
  return (
    <section className="feedback container">
      <h3 className="feedback-title">Форма обратной связи</h3>
      <p className="feedback-subtitle">
        Заполните форму обратной связи и получите ответы на свои вопросы
      </p>
      <span className="feedback-hint">* - поля, обязательные к заполнению</span>
        <form action="" className="feedback-forms">
            <div className="feedback-form-left">
                <label htmlFor="" className="feedback-form__label">
                    <span className="style-form"> Имя <sup className="label-star">*</sup></span>
                    <input type="text" className="feedback-form__input input-indent"/>
                </label>
                <label htmlFor="" className="feedback-form__label">
                    <span className="style-form"> Телефон <sup className="label-star">*</sup></span>
                    <input type="tel" name="phone" className="feedback-form__input input-indent" />
                </label>
                <label htmlFor="" className="feedback-form__label">
                    <span className="style-form">e-mail</span>
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
    </section>
  );
};

export default Feedback;
