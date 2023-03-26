import { children } from "react";
import { Header } from "./Header/Header";
import styles from "./styles.module.css";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};
