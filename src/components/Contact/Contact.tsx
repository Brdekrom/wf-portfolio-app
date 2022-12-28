import { Fragment, useRef, useState, } from "react"
import style from "./Contact.module.css"
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState("")

    const form = useRef();

    const sendEmail = (e:any) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'default_template', e.target, 'OTP85_cjHYuhqr02-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>

    )

}

export default Contact