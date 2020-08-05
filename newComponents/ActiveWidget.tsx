import React, {useEffect, useState, useMemo} from "react";
import axios from "axios"

interface IProps {
    setUnActive: () => void;
    isPhone: boolean;
}

const ActiveWidget: React.FC<IProps> = ({ setUnActive, isPhone }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [form, setForm] = useState<any>({
        name: "",
        phone: "",
        email: "",
    })

    const changeForm = (key: string) => (e: any) => {
        e.persist();
        setForm((prevState: any) => ({ ...prevState, [key]: e?.target?.value}))
    }

    const sendOnMail = () => {
        setIsloading(true);
        axios.post("/api/contact", form)
            .then(() => setForm({
                name: "",
                phone: "",
                email: "",
            })).catch(() => setForm({
            name: "",
            phone: "",
            email: "",
        })).finally(() => setIsloading(false))
    }

    const unActive = () => {
        setTimeout(() => {
            setUnActive()
        }, 500)
        setIsMounted(false)
    }

    useEffect(() => {
        setIsMounted(true)
    },[])

    useEffect(() => {
        console.log("FORM => ", form);
    }, [form])

    return <section style={{
        right: isMounted ? "3rem" : "-100%",
    }} className="active-widget">
        <div className="active-widget-title">
            {
                isPhone
                    ? "Узнайте актуальные цены продукции уже через 1 минуту. Звоните!"
                    : "Получите актуальный прайс на продукцию “МИКПРОМ”"
            }
        </div>


                <div className="active-widget-control-container">
                    <label htmlFor={name} className="active-widget-label">
                        Имя
                         <span>*</span>
                    </label>
                    <input value={form.name} onChange={changeForm("name")} id={"name"} type="text" className="active-widget-control"/>
                </div>

            <div  className="active-widget-control-container">
                <label htmlFor={name} className="active-widget-label">
                    Телефон
                    <span>*</span>
                </label>
                <input value={form.phone} onChange={changeForm("phone")} id="phone" type="text" className="active-widget-control"/>
            </div>

            <div  className="active-widget-control-container">
            <label htmlFor={name} className="active-widget-label">
            e-mail
            </label>
            <input value={form.email} onChange={changeForm("email")} id="email" type="text" className="active-widget-control"/>
            </div>


        <div className="active-widget-hint">* - поля, обязательные к заполнению</div>
        <button onClick={sendOnMail} className="active-widget-button">{
            isLoading
                ? "Отправка..."
                : isPhone
                    ? "ЗАКАЗАТЬ ЗВОНОК!"
                    : "ОСТАВИТЬ ЗАЯВКУ"

        }</button>
        <div onClick={unActive} className="active-widget-close"><span /> <div /></div>
    </section>
}

export default ActiveWidget