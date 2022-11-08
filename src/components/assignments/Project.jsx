import { useState } from "react";
import { UserData } from "./Data";
import DeleteIcon from "@mui/icons-material/Delete";
import filled from "../../images/filled.png";
import empty from "../../images/empty.png";
import styles from "./Project.module.css";
import LineChart from "./LineChart";

function Project(props) {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["rgba(75,192,192,1)"],
        color: "rgba(75,192,192,1)",
        borderColor: "#000",
        fill: true,
        borderWidth: 1,
        display: false,
        showLabelBackdrop: false,
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
        offset: false,
      },
    ],
  });

  function deleteProject() {
    console.log(props.index);
    props.deleteItem(props.index);
  }

  return (
    <div className={styles.projectCard}>
      <div className={styles.flexRow}>
        <h3 className={styles.title}>
          Project {props.index}
          {props.item.name ? " - " + props.item.name : ""}
        </h3>
        <DeleteIcon className={styles.icon} onClick={deleteProject} />
      </div>
      <img
        className={styles.graph}
        src={props.item.status === "Completed" ? filled : empty}
        alt="Graph"
      />
      {/* <div style={{ width: 200 }}>
        <LineChart id="mychart" chartData={userData} />
      </div> */}

      {/* Status - Mean - NPS Score - TODOs */}
      {props.item.status && (
        <p className={styles.text}>{"Status: " + props.item.status}</p>
      )}
      {props.item.mean && (
        <p className={styles.text}>{"Mean: " + props.item.mean}</p>
      )}
      {props.item.nps && (
        <p className={styles.text}>{"NPS Score: " + props.item.nps}</p>
      )}
      {props.item.todo && (
        <p className={styles.text}>{"# TODOs left: " + props.item.todo}</p>
      )}
    </div>
  );
}

export default Project;
