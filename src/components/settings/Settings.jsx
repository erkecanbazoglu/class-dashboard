import styles from "./Settings.module.css";
import SettingBox from "./SettingBox";

function Settings() {
  const settingList = [
    {
      id: 0,
      title: "Make Changes",
      settings: [
        {
          icon: "AlternateEmailIcon",
          name: "Rename",
        },
        {
          icon: "ControlPointDuplicateIcon",
          name: "Duplicate",
        },
        {
          icon: "AddBoxIcon",
          name: "Archive class",
        },
        {
          icon: "MoreHorizIcon",
          name: "More settings",
        },
      ],
    },
  ];

  function createSettingBox(settingBoxItem, index) {
    return <SettingBox key={index} index={index} item={settingBoxItem} />;
  }

  const date = new Date();

  return (
    <div>
      <section className="card">
        <h2 className={"margin-bottom-sm center"}>⚙️ Settings</h2>
        <p className={"margin-bottom-md"}>Adjust the class settings</p>
        <div className={styles.flexList}>
          {settingList.map(createSettingBox)}
        </div>

        <div className={styles.subsection}>
          <p>Last change: {date.toLocaleString("tr-TR")}</p>
        </div>
      </section>
    </div>
  );
}

export default Settings;
