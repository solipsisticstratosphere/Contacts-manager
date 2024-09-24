import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/contactsOps";

export default function Contact({ contactCard: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.container}>
      <div className={css.contactDetails}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{number}</p>
      </div>
      <button
        className={css.deleteButton}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}
