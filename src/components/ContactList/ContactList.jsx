import { useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/actions"; // Import the action

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contactCard={contact} />
        </li>
      ))}
    </ul>
  );
}
