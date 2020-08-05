import React, {useContext, useEffect, useState} from "react";
import ActiveWidget from "./ActiveWidget";
import moment from "moment-timezone";
import {CartContext} from "../context/CartContext";


const Widget = () => {
    const [isActive] = useContext(CartContext);
    const [isLocalActive, setIsLocalActive] = useState(false);
    const [isPhone, setIsPhone] = useState(false);

    const img = isPhone ? require("../public/images/widget-phone.png") : require("../public/images/widget-message.png")

    const setUnActive = () => {
        setIsLocalActive(false)
    }

    const reconciler = () => {
        const start = [8, 30];
        const end = [17, 30];
        const current = moment(new Date()).tz("Europe/Samara").format("HH:MM").split(":").map((time) => Number(time));

        const isPhone = {
            h: false,
            m: false,
        }

        const isHours = current[0] >= start[0] && current[0] <= end[0]

        if (isHours) {
            isPhone.h = true;

            if (current[0] !== start[0] && current[0] !== end[0]) {
                isPhone.m = true
            }

            if (current[0] === start[0]) {
                if (current[1] >= start[1]) {
                    isPhone.m = true
                }
            }

            if (current[0] === end[0]) {
                if (current[1] <= end[1]) {
                    isPhone.m = true
                }
            }
        }

        return isPhone
    }

    useEffect(() => {
        const isPhone = reconciler();
        const result = Object.values(isPhone).every(bool => bool);

        if (result) {
            setIsPhone(true)
        } else {
            setIsPhone(false)
        }
    }, [])

    useEffect(() => {
        if (isActive) {
            setIsLocalActive(true)
        }
    }, [isActive])

    if (isLocalActive) {
        return <ActiveWidget isPhone={isPhone} setUnActive={setUnActive} />
    }

    return <article className="widget" onClick={() => setIsLocalActive(true)}>
        <img src={img} alt="" className="widget-img" />
    </article>
}

export default Widget;