import css from "./Contact.module.css";

export default function Contact({
  contactCard: { id, name, number },
  onDelete,
}) {
  return (
    <div className={css.container}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
