import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./Snapshot.module.css";
import NpsScore from "./NpsScore";
import cx from "classnames";

function Snapshot() {
  const npsList = [
    {
      id: 0,
      title: "👍 NPS Score",
      promoters: 23,
      passives: 70,
      detractors: 13,
    },
    // {
    //   id: 0,
    //   title: "👍 NPS Score",
    //   promoters: 23,
    //   passives: 70,
    //   detractors: 13,
    // },
    // {
    //   id: 0,
    //   title: "👍 NPS Score",
    //   promoters: 23,
    //   passives: 70,
    //   detractors: 13,
    // },
  ];

  function createNpsScores(npsScoreItem, index) {
    return <NpsScore key={index} index={index} item={npsScoreItem} />;
  }

  return (
    <section className={cx("card")}>
      <h2 className={"margin-bottom-sm"}>📷 Snapshot</h2>
      <p className={"margin-bottom-md"}>
        Review your class progress and quick stats
      </p>
      <div className={styles.flexList}>
        {npsList.map(createNpsScores)}
        <div className={styles.addCard}>
          <button className={styles.addBtn}>
            <p>Add new</p>
            <AddCircleIcon className={styles.btnIcon} />
          </button>
        </div>
      </div>

      <div className={styles.subsection}>
        <p> </p>
      </div>
    </section>
  );
}

export default Snapshot;
