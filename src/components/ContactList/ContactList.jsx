import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/actions";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.filter);
  return (
    <ul>
      {contacts
        .filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact) => (
          <li key={contact.id}>
            <Contact contactCard={contact} />
          </li>
        ))}
    </ul>
  );
}
