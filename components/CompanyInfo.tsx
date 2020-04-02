import React from "react";

const CompanyInfo = () => {
  return (
    <section className="company-info">
      <article className="company-info-article">
        <h2 className="company-info-article__title">О Компании</h2>
        <p className="company-info-article__text">
          Компания «МИКПРОМ» - производитель высококачественной продукции из
          мяса птицы. Мы успешно поставляем нашу продукцию по всей России с 2001
          года. Передовые технологии, высококвалифицированные сотрудники и
          строгий контроль входящего сырья - это то, что позволяет нам
          соответствовать всем высоким стандартам качества.
        </p>
      </article>
      <article className="company-info-article">
        <h2 className="company-info-article__title">Производство</h2>
        <p className="company-info-article__text">
          Наша продукция проходит строгий контроль качества на всех стадиях
          производства и не подвергается повторной заморозке. Технология шоковой
          заморозки и современная упаковка позволяют сохранить все питательные
          свойства и вкус отборного мяса. Мы тщательно проверяем все входящее
          сырье и серьезно подходим к выбору контрагентов. Это дает нам
          возможность гарантировать нашим клиентам высочайшее качество нашей
          продукции.
        </p>
      </article>

      <section className="company-info-video">
        <div className="thumb-wrap">
          <iframe
            width="1680"
            height="945"
            src="https://www.youtube.com/embed/ZeqyVQkswFA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <button className="company-info-btn">Заказать партию</button>
      </section>
    </section>
  );
};

export default CompanyInfo;
