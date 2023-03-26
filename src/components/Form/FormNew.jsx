import { useState } from "react";
import { v4 as uuid4 } from "uuid";
// import "../styles/reset.css";
// import "../styles/GlobalStyles.css";
import styles from "./styles.module.css";

export const FormNew = ({ listTransactions, setListTransactions }) => {
  const [input, setInput] = useState({
    description: "",
    value: 1,
    status: "",
  });

  function submit(event) {
    event.preventDefault();

    const newTransaction = {
      ...input,
      id: uuid4(),
      value: parseInt(input.value),
    };

    if (input.status === "Saída") {
      if (input.value > 0) {
        const sub = {
          ...input,
          value: parseInt(input.value * -1),
        };

        setListTransactions([...listTransactions, sub]);
      } else {
        setListTransactions([...listTransactions, newTransaction]);
      }
    } else {
      setListTransactions([...listTransactions, newTransaction]);
    }

    setInput({
      description: "",
      value: 1,
      status: "",
    });
  }

  return (
    <form onSubmit={submit} className={styles.formContainer}>
      <label htmlFor="description">Descrição</label>
      <input
        value={input.description}
        name="description"
        type="text"
        placeholder="Digite aqui sua descrição"
        onChange={(event) =>
          setInput({ ...input, description: event.target.value })
        }
        required
      />
      <p>Ex: Compra de roupas</p>
      <label htmlFor="value">Valor (R$)</label>
      <input
        value={input.value}
        name="value"
        type="number"
        placeholder="1"
        onChange={(event) => setInput({ ...input, value: event.target.value })}
        required
      />
      <label htmlFor="select">Tipo de valor</label>
      <select
        name="select"
        onChange={(event) => setInput({ ...input, status: event.target.value })}
        required
      >
        <option value="">Escolha o tipo de transação</option>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
      <button type="submit" className="button">
        Inserir Valor
      </button>
    </form>
  );
};
