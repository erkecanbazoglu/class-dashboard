import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./Assignments.module.css";
import Project from "./Project";
import cx from "classnames";

function Assignments() {
  const projectList = [
    {
      id: 0,
      name: "Joke",
      status: "Completed",
      mean: 67,
      nps: 27,
      todo: 5,
    },
    {
      id: 1,
      name: null,
      status: "In Progress 😁",
      mean: null,
      nps: null,
      todo: 5,
    },
    // {
    //   id: 2,
    //   name: "Random",
    //   status: "In Progress 😁",
    //   mean: null,
    //   nps: null,
    //   todo: 7,
    // },
    // {
    //   id: 0,
    //   name: "Joke",
    //   status: "Completed",
    //   mean: 67,
    //   nps: 27,
    //   todo: 5,
    // },
    // {
    //   id: 1,
    //   name: null,
    //   status: "In Progress 😁",
    //   mean: null,
    //   nps: null,
    //   todo: 5,
    // },
    // {
    //   id: 2,
    //   name: "Random",
    //   status: "In Progress 😁",
    //   mean: null,
    //   nps: null,
    //   todo: 7,
    // },
    // {
    //   id: 0,
    //   name: "Joke",
    //   status: "Completed",
    //   mean: 67,
    //   nps: 27,
    //   todo: 5,
    // },
    // {
    //   id: 1,
    //   name: null,
    //   status: "In Progress 😁",
    //   mean: null,
    //   nps: null,
    //   todo: 5,
    // },
    // {
    //   id: 2,
    //   name: "Random",
    //   status: "In Progress 😁",
    //   mean: null,
    //   nps: null,
    //   todo: 7,
    // },
  ];

  //   const ele = document.getElementById("flexList");
  //   //   document.addEventListener("mousedown", mouseDownHandler);

  //   let pos = { top: 0, left: 0, x: 0, y: 0 };

  //   const mouseDownHandler = function (e) {
  //     console.log("HEY");
  //     pos = {
  //       // The current scroll
  //       left: ele.scrollLeft,
  //       top: ele.scrollTop,
  //       // Get the current mouse position
  //       x: e.clientX,
  //       y: e.clientY,
  //     };

  //     document.addEventListener("mousemove", mouseMoveHandler);
  //     document.addEventListener("mouseup", mouseUpHandler);
  //   };

  //   const mouseMoveHandler = function (e) {
  //     // How far the mouse has been moved
  //     const dx = e.clientX - pos.x;
  //     const dy = e.clientY - pos.y;

  //     // Scroll the element
  //     ele.scrollTop = pos.top - dy;
  //     ele.scrollLeft = pos.left - dx;
  //   };

  //   //   const mouseDownHandler = function(e) {
  //   //     // Change the cursor and prevent user from selecting the text
  //   //     ele.style.cursor = 'grabbing';
  //   //     ele.style.userSelect = 'none';
  //   // };

  //   const mouseUpHandler = function () {
  //     document.removeEventListener("mousemove", mouseMoveHandler);
  //     document.removeEventListener("mouseup", mouseUpHandler);

  //     ele.style.cursor = "grab";
  //     ele.style.removeProperty("user-select");
  //   };

  function createProjects(projectItem, index) {
    return <Project key={index} index={index} item={projectItem} />;
  }

  return (
    <div className="grid--span-3">
      <section className={cx("card")}>
        <h2 className={"margin-bottom-sm"}>📖 Class Assignments</h2>
        <p className={"margin-bottom-md"}>Oversee and manage all assignments</p>
        <div className={styles.flexList}>
          {projectList.map(createProjects)}
          <div className={styles.addCard}>
            <button className={styles.addBtn}>
              <p>Create new</p>
              <AddCircleIcon className={styles.btnIcon} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Assignments;
