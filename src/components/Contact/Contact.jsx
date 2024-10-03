import s from "./Contact.module.css";
import userIcon from "../img/user.svg";
import tel from "../img/phone.svg";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={s.item}>
      <div>
        <div className={s.wrap}>
          <img src={userIcon} alt="user-logo" className={s.logo}></img>
          <p className={s.info}>{contact.name}</p>
        </div>

        <div className={s.wrap}>
          <img src={tel} alt="user-logo" className={s.logo}></img>
          <p className={s.info}>{contact.number}</p>
        </div>
      </div>
      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
