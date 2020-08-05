import React from "react";

interface IProps {
    hideModal: (e: any) => void;
}

const RegistrationRequestModal: React.FC<IProps> = ({ hideModal }) => {
    return (
        <div onClick={hideModal} className="modal modal_show">
            <div className="modal-dialog">
                <div className="new-modal">
                    <section className="registration-request-modal">
                        <div className="registration-request-modal-title">ОФОРМЛЕНИЕ ЗАЯВКИ</div>

                        <div className="registration-request-modal-container">
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="fio" className="registration-request-modal-control-label">ФИО</label>
                                <input id="fio" type="text" className="registration-request-modal-control"/>
                            </div>
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="companyName" className="registration-request-modal-control-label">Название компании</label>
                                <input id="companyName" type="text" className="registration-request-modal-control"/>
                            </div>
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="email" className="registration-request-modal-control-label">e-mail</label>
                                <input id="email" type="text" className="registration-request-modal-control"/>
                            </div>
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="phone" className="registration-request-modal-control-label">Телефон</label>
                                <input type="text" id="phone" className="registration-request-modal-control"/>
                            </div>
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="message" className="registration-request-modal-control-label">Сопроводительное письмо</label>
                                <textarea rows={6} id="message" className="registration-request-modal-control"/>
                            </div>
                            </div>

                            <div className="registration-request-modal-button-container">
                                <button className="registration-request-modal-button">Отправить</button>
                            </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default RegistrationRequestModal;