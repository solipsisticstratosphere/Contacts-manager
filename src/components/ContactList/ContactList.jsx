import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={nanoid()}>
            <Contact contactCard={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
