import { useState } from "react";
import styles from "./styles.module.css";

export const Total = ({ calculateTotal, listTransactions }) => {
  return (
    <div className={styles.totalContainer}>
      <div className={styles.column1}>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <h3 className={styles.totalValue}>R$ {calculateTotal}</h3>
    </div>
  );
};
