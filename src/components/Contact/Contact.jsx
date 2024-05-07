import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

export default function Contact({name, number}){
    return(
        <div className={css.container}>
            <div>
                <p><IoPerson />{name}</p>
            <p><FaPhone />{number}</p>
            </div>
            <button className={css.btn}>delete</button>
        </div>
    )
}