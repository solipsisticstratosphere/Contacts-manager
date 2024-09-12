import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
deleteContact;
export default function Contact({ contactCard: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={css.container}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </div>
  );
}
