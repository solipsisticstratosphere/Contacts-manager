import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts, getFilter } from "../../redux/selectors";
import { selectVisibleContacts } from "../../redux/contactsSlice";
export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

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
