import stealth from "../../images/stealth.png";
import styles from "./Header.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import HelpIcon from "@mui/icons-material/Help";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { NotificationsIcon } from "@mui/material";
import Avatar from "./Avatar";

const avatarImg =
  "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-49.jpg?w=740";

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.flexRow}>
          <img src={stealth} className={styles.stealth} alt="Stealth logo" />
          <a href="#" className={styles.pageLink}>
            <p className={styles.pageName}>
              Wharton {">"} <strong>STAT476</strong>
            </p>
          </a>
        </div>
        <div>
          <NotificationsIcon className={styles.icon} />
          <AppsIcon className={styles.icon} />
          <HelpIcon className={styles.icon} />
          <MoreVertIcon className={styles.icon} />
          <Avatar
            className={styles.avatar}
            src={avatarImg}
            alt="Avatar image"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
