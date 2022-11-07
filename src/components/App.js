import styles from "./App.module.css";
import Header from "./header/Header";
import Assignments from "./assignments/Assignments";
import Snapshot from "./snapshot/Snapshot";
import People from "./people/People";
import Settings from "./settings/Settings";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className="grid">
          <Assignments />
          <Snapshot />
          <People />
          <Settings />
        </div>
      </main>
    </div>
  );
}

export default App;
