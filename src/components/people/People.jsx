import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./People.module.css";
import PeopleBox from "./PeopleBox";
import TextField from "./TextField";

function People() {
  const avatarImg =
    "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-49.jpg?w=740";

  const peopleList = [
    {
      id: 0,
      title: "🏆 Top 5",
      students: [
        {
          profileImg: avatarImg,
          name: "Jane Doe",
        },
        {
          profileImg: avatarImg,
          name: "Smith Jacobs",
        },
        {
          profileImg: avatarImg,
          name: "Anna Ferguson",
        },
        {
          profileImg: avatarImg,
          name: "Adam Serodu",
        },
        {
          profileImg: avatarImg,
          name: "Michael Bu",
        },
      ],
    },
    {
      id: 1,
      title: "🆘 Bottom 5",
      students: [
        {
          profileImg: avatarImg,
          name: "Jane Doe",
        },
        {
          profileImg: avatarImg,
          name: "Smith Jacobs",
        },
        {
          profileImg: avatarImg,
          name: "Anna Ferguson",
        },
        {
          profileImg: avatarImg,
          name: "Adam Serodu",
        },
        {
          profileImg: avatarImg,
          name: "Michael Bu",
        },
      ],
    },
    // {
    //   id: 0,
    //   title: "🏆 Top 5",
    //   students: [
    //     {
    //       profileImg: avatarImg,
    //       name: "Jane Doe",
    //     },
    //     {
    //       profileImg: avatarImg,
    //       name: "Smith Jacobs",
    //     },
    //     {
    //       profileImg: avatarImg,
    //       name: "Anna Ferguson",
    //     },
    //     {
    //       profileImg: avatarImg,
    //       name: "Adam Serodu",
    //     },
    //     {
    //       profileImg: avatarImg,
    //       name: "Michael Bu",
    //     },
    //   ],
    // },
    // {
    //   id: 1,
    //   title: "🆘 Bottom 5",
    //   students: [
    //     {
    //       profileImg: avatarImg,
    //       name: "Jane Doe",
    //     },
    //     {
    //       profileImg: avatarImg,
    //       name: "Smith Jacobs",
    //     },
    //     {
    //       profileImg: avatarImg,
    //       name: "Anna Ferguson",
    //     },
    //     {
    //       profileImg: avatarImg,
    //       name: "Adam Serodu",
    //     },
    //     {
    //       profileImg: avatarImg,
    //       name: "Michael Bu",
    //     },
    //   ],
    // },
  ];

  function createPeopleBox(peopleBoxItem, index) {
    return <PeopleBox key={index} index={index} item={peopleBoxItem} />;
  }

  return (
    <section className="card">
      <div className={styles.titleRow}>
        <h2 className={"margin-bottom-sm"}>🎓 People</h2>
        <TextField />
      </div>
      <p className={"margin-bottom-md"}>
        Manage all students and their information
      </p>

      <div className={styles.flexList}>
        {peopleList.map(createPeopleBox)}
        <div className={styles.addCard}>
          <button className={styles.addBtn}>
            <p>Add custom</p>
            <AddCircleIcon className={styles.btnIcon} />
          </button>
        </div>
      </div>

      <div className={styles.subsection}>
        <a>📜 Add new instructor</a>
        <p> | </p>
        <a>👀 Manage students</a>
      </div>
    </section>
  );
}

export default People;
