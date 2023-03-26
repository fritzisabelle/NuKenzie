import { useState } from "react";
import { CardTransactions } from "./CardTransictions/CardTransactions";
import styles from "./styles.module.css";

export const List = ({ listTransactions, setListTransactions }) => {
  return (
    <ul className={styles.listContainer}>
      <h3>Resumo financeiro</h3>
      {listTransactions.length > 0 ? (
        listTransactions.map((transaction) => {
          return (
            <CardTransactions
              key={transaction.id}
              transaction={transaction}
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          );
        })
      ) : (
        <h2>Você ainda não possui nenhum lançamento</h2>
      )}
    </ul>
  );
};
