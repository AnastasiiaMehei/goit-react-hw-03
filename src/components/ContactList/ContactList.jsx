import Contact from "../Contact/Contact";

export default function ContactList({ data }) {
    return (
        <ul>
            {data.map((data) => ( 
                <li key={data.id}> 
                    <Contact />
                </li>
            ))}
        </ul>
    );
}