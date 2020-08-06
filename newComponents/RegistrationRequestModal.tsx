import React, {useState} from "react";
import axios from "axios";

interface IProps {
    hideModal: (e: any) => void;
}

const RegistrationRequestModal: React.FC<IProps> = ({ hideModal }) => {
    const [isLoading, setIsloading] = useState(false);
    const [form, setForm] = useState<any>({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
    })

    const changeForm = (key: string) => (e: any) => {
        e.persist();
        setForm((prevState: any) => ({ ...prevState, [key]: e?.target?.value}))
    }

    const sendOnMail = () => {
        setIsloading(true);
        axios.post("/api/contact", form)
            .then(() => {
                    setForm({
                        fullName: "",
                        companyName: "",
                        email: "",
                        phone: "",
                        message: "",
                    })
                hideModal({ target: { className: "modal modal_show" }});
                }
            ).catch(() => setForm({
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            message: "",
        })).finally(() => setIsloading(false))
    }

    return (
        <div onClick={hideModal} className="modal modal_show">
            <div className="modal-dialog">
                <div className="new-modal">
                    <section className="registration-request-modal">
                        <div className="registration-request-modal-title">ОФОРМЛЕНИЕ ЗАЯВКИ</div>

                        <form onSubmit={(e: any) => {
                            e.preventDefault();
                            sendOnMail()
                        }} className="registration-request-modal-container">
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="fio" className="registration-request-modal-control-label">ФИО</label>
                                <input onChange={changeForm("fullName")} value={form.fullName}  id="fio" type="text" className="registration-request-modal-control"/>
                            </div>
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="companyName" className="registration-request-modal-control-label">Название компании</label>
                                <input onChange={changeForm("companyName")} value={form.companyName} id="companyName" type="text" className="registration-request-modal-control"/>
                            </div>
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="email" className="registration-request-modal-control-label">e-mail</label>
                                <input id="email"  value={form.email} onChange={changeForm("email")} type="text" className="registration-request-modal-control"/>
                            </div>
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="phone" className="registration-request-modal-control-label">Телефон</label>
                                <input type="text" value={form.phone} id="phone" onChange={changeForm("phone")} className="registration-request-modal-control"/>
                            </div>
                            <div className="registration-request-modal-control-container">
                                <label htmlFor="message" className="registration-request-modal-control-label">Сопроводительное письмо</label>
                                <textarea rows={6} id="message" value={form.message} onChange={changeForm("message")} className="registration-request-modal-control"/>
                            </div>
                            </form>

                            <div className="registration-request-modal-button-container">
                                <button onClick={sendOnMail} className="registration-request-modal-button">{ isLoading ? "Отправка..." : "Отправить"}</button>
                            </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default RegistrationRequestModal;