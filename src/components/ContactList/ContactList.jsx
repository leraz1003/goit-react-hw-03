import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactsList;
