import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
