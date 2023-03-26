import "./App.css";
import { useState } from "react";
import { DefaultTemplate } from "./components/DefaultTemplate/DefaultTemplate";
import { List } from "./components/List/List";
import { Total } from "./components/Total/Total";
import { FormNew } from "./components/Form/FormNew";
import "./styles/reset.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = listTransactions.reduce(
    (previousValue, transaction) => {
      return previousValue + transaction.value;
    },
    0
  );

  return (
    <DefaultTemplate>
      <div className="main">
        <div className="column1">
          <FormNew
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <>
            {listTransactions.length > 0 ? (
              <Total
                calculateTotal={calculateTotal}
                listTransactions={listTransactions}
              />
            ) : (
              <></>
            )}
          </>
        </div>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </DefaultTemplate>
  );
}

export default App;
