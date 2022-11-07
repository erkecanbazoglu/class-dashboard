import styles from "./SettingBox.module.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

{
  /* <AddCircleIcon className={styles.btnIcon} /> */
}

function SettingBox(props) {
  function getIcon(icon) {
    let settingIcon;
    switch (icon) {
      case "AlternateEmailIcon":
        settingIcon = <AlternateEmailIcon className={styles.btnIcon} />;
        break;
      case "ControlPointDuplicateIcon":
        settingIcon = <ControlPointDuplicateIcon className={styles.btnIcon} />;
        break;
      case "AddBoxIcon":
        settingIcon = <AddBoxIcon className={styles.btnIcon} />;
        break;
      case "MoreHorizIcon":
        settingIcon = <MoreHorizIcon className={styles.btnIcon} />;
        break;
      default:
        settingIcon = <MoreHorizIcon className={styles.btnIcon} />;
    }
    return settingIcon;
  }

  function createSettings(settingItem, index) {
    return (
      <div className={styles.flexRow}>
        {getIcon(settingItem.icon)}
        <p className={styles.text}>{settingItem.name}</p>
      </div>
    );
  }

  return (
    <div className={styles.projectCard}>
      {props.item.title && <h3 className={styles.title}>{props.item.title}</h3>}
      {props.item.settings.map(createSettings)}
    </div>
  );
}

export default SettingBox;
