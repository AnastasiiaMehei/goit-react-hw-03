import Contact from "../Contact/Contact";
import css from './ContactList.module.css';

export default function ContactList({ data }) {
    return (
        <ul className={css.ul}>
            {data.map((contact) => ( 
                <li className={css.li} key={contact.id}> 
                    <Contact name={contact.name} number={contact.number} /> 
                </li>
            ))}
        </ul>
    );
}