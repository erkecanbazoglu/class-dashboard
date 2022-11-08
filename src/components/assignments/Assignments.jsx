import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./Assignments.module.css";
import Project from "./Project";
import cx from "classnames";

function Assignments() {
  const [projectName, setProjectName] = useState("");
  const [modal, setModal] = useState(false);

  const [projects, setProjects] = useState([
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
  ]);

  const toggleModal = () => {
    setProjectName("");
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  function changeProjectName(event) {
    const newText = event.target.value;
    setProjectName(newText);
  }

  function saveProject(event) {
    event.preventDefault();

    let newProjects = [...projects];

    const project = {
      id: newProjects.length,
      name: projectName,
      status: "In Progress 😁",
      mean: null,
      nps: null,
      todo: 5,
    };
    newProjects.push(project);
    toggleModal();
    setProjects(newProjects);
  }

  function deleteProject(index) {
    let newProjects = [...projects];
    let newProjects1 = [...newProjects].splice(0, index);
    let newProjects2 = [...newProjects].splice(index + 1, newProjects.length);
    newProjects = [...newProjects1, ...newProjects2];
    setProjects(newProjects);
  }

  function createProjects(projectItem, index) {
    return (
      <Project
        key={index}
        index={index}
        item={projectItem}
        deleteItem={deleteProject}
      />
    );
  }

  return (
    <div className="grid--span-3">
      <section className={cx("card")}>
        <h2 className={"margin-bottom-sm"}>📖 Class Assignments</h2>
        <p className={"margin-bottom-md"}>Oversee and manage all assignments</p>
        <div className={styles.flexList}>
          {projects.map(createProjects)}
          <div className={styles.addCard}>
            <button onClick={toggleModal} className={styles.addBtn}>
              <p>Create new</p>
              <AddCircleIcon className={styles.btnIcon} />
            </button>
          </div>
        </div>
        {/* <Modal model={modal} /> */}
        <div>
          {modal && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.overlay}></div>
              <div className={styles.modalContent}>
                <form action="#" name="search">
                  <div className={styles.fullName}>
                    <input
                      type="text"
                      id="project"
                      placeholder="Project name..."
                      name="project"
                      value={projectName}
                      onChange={changeProjectName}
                    />
                    <div className={styles.btnRow}>
                      <button className={styles.btn} onClick={toggleModal}>
                        Cancel
                      </button>
                      <button className={styles.btn} onClick={saveProject}>
                        Save
                      </button>
                    </div>
                  </div>
                </form>
                <button className={styles.closeModal} onClick={toggleModal}>
                  <CloseIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Assignments;
