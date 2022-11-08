import styles from "./PeopleBox.module.css";
import Avatar from "../header/Avatar";

function PeopleBox(props) {
  function createPeople(peopleItem, index) {
    return (
      <div className={styles.flexRow}>
        <Avatar
          key={index}
          className={styles.avatar}
          src={peopleItem.profileImg}
          alt="Avatar image"
        />
        <p className={styles.text}>{peopleItem.name}</p>
      </div>
    );
  }

  return (
    <div className={styles.projectCard}>
      {props.item.title && <h3 className={styles.title}>{props.item.title}</h3>}
      {props.item.students.map(createPeople)}
    </div>
  );
}

export default PeopleBox;
