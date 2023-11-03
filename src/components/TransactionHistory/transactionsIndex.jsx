import css from "./transactions.module.css";

const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transactionHistory}>
        <thead className={css.transactionHeadContainer}>
          <tr className={css.transactionHead}>
            <th className={css.transactionHeadItem}>Type</th>
            <th className={css.transactionHeadItem}>Amount</th>
            <th className={css.transactionHeadItem}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(transaction => (
            <tr className={css.transactionBodyContainer} key={transaction.id}>
              <td className={css.transactionBodyItem}>{transaction.type}</td>
              <td className={css.transactionBodyItem}>{transaction.amount}</td>
              <td className={css.transactionBodyItem}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default TransactionHistory;