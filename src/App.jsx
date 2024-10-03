import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContact] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedData && savedData.length > 0) {
      return savedData;
    } else
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
  });
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContact((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  const deleteContact = (id) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== id);
    });
  };

  const handleChange = (evt) => {
    setFilterValue(evt.target.value);
  };

  const searchValue = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox onChange={handleChange} value={filterValue} />
      <ContactList contacts={searchValue} onDelete={deleteContact} />
    </>
  );
}

export default App;
