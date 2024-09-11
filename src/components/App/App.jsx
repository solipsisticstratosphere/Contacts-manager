import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { addContact, deleteContact, setFilter } from "../../redux/actions";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter); // Get filter from state
  const dispatch = useDispatch();

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value)); // Dispatch the setFilter action
  };

  // Filter the contacts based on the filter value
  const visibleContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) // Filter by name
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
