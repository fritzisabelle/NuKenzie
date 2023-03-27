import styles from "./styles.module.css";
import logoNukenzie from "../../../assets/Nu-Kenzie.svg";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={logoNukenzie} alt="logo nukenzie" className={styles.logo} />
      </div>
    </header>
  );
};
