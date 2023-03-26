import styles from "./style.module.css";

export const CardTransactions = ({
  transaction,
  setListTransactions,
  listTransactions,
}) => {
  function deleteTransaction(transactionId) {
    const newlistTransaction = listTransactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    setListTransactions(newlistTransaction);
  }

  if (transaction.status === "Entrada") {
    return (
      <li className={styles.transactionContainerIn}>
        <div className={styles.column1}>
          <h3>{transaction.description}</h3>
          <p>{transaction.status}</p>
        </div>
        <div className={styles.column2}>
          <p>R${transaction.value}</p>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className={styles.deleteButton}
          >
            Excluir
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li className={styles.transactionContainerOut}>
        <div className={styles.column1}>
          <h3>{transaction.description}</h3>
          <small>{transaction.status}</small>
        </div>
        <div className={styles.column2}>
          <p>R${transaction.value}</p>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className={styles.deleteButton}
          >
            Excluir
          </button>
        </div>
      </li>
    );
  }
};
