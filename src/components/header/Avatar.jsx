import styles from "./Avatar.module.css";
import cx from "classnames";

const noAvatar =
  "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";

const handleOnError = (e) => {
  e.target.src = noAvatar;
  e.target.alt = "Default avatar";
};

function Avatar(props) {
  return (
    <div className={cx(styles.inline, styles.left)}>
      <img
        className={cx(styles.avatar, props.className)}
        src={props.src}
        alt={props.alt}
        onError={handleOnError}
      />
    </div>
  );
}

export default Avatar;
