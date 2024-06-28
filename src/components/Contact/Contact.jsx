import { HiUser } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import styles from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.user}>
          <HiUser size={"20px"} title="contact icon" />
          <span>{contact.name}</span>
        </div>

        <div className={styles.phone}>
          <HiPhone size={"20px"} title="phone icon" />
          <span>{contact.number}</span>
        </div>
      </div>

      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </>
  );
}
