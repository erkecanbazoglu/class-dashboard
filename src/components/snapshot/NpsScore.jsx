import styles from "./NpsScore.module.css";
import doughnut from "../../images/doughnut.png";

function NpsScore(props) {
  return (
    <div className={styles.projectCard}>
      {props.item.title && <h3 className={styles.title}>{props.item.title}</h3>}
      <img className={styles.graph} src={doughnut} alt="Graph" />
      {/* <div style={{ width: 200 }}>
        <LineChart id="mychart" chartData={userData} />
      </div> */}

      {/* Promoters - Passives - Detractors */}
      {props.item.promoters && (
        <p className={styles.text}>{"Promoters: " + props.item.promoters}</p>
      )}
      {props.item.passives && (
        <p className={styles.text}>{"Passives: " + props.item.passives}</p>
      )}
      {props.item.detractors && (
        <p className={styles.text}>{"Detractors: " + props.item.detractors}</p>
      )}
    </div>
  );
}

export default NpsScore;
