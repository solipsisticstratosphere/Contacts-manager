import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { getIsLoading, getIsError } from "../../redux/selectors";
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  const error = useSelector(getIsError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;
