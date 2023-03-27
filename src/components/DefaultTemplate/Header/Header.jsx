import styles from "./styles.module.css";
import "../../../assets/Nu-Kenzie.svg";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img
          src="../../../assets/Nu-Kenzie.svg"
          // src="../src/assets/Nu-Kenzie.svg"
          alt="logo nukenzie"
          className={styles.logo}
        />
      </div>
    </header>
  );
};
