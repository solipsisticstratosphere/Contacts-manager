import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import { setFilter } from "../../redux/filtersSlice";

function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  const visibleContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) // Filter by name
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox onFilter={handleFilterChange} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}

export default App;
