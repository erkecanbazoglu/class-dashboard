import styles from "./TextField.module.css";
import SearchIcon from "@mui/icons-material/Search";

function TextField() {
  return (
    <form className="search-form" action="#" name="search">
      <div className={styles.fullName}>
        <input
          type="text"
          id="full-name"
          placeholder="Search by name..."
          name="full-name"
        />
        <SearchIcon className={styles.icon} />
      </div>
    </form>
  );
}

export default TextField;
