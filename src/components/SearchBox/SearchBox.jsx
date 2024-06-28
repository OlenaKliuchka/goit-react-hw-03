import styles from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
  return (
    <>
      <p className={styles.title}> Find contacts by name</p>
      <input
        type="text"
        name="search"
        className={styles.box}
        value={filter}
        onInput={(event) => onFilter(event.target.value)}
      />
    </>
  );
}
