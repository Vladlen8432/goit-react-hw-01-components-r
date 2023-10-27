import "./transactions.css";

const TransactionHistory = ({ items }) => {
    return (
      <table className="transaction-history">
        <thead className="transaction-head-container">
          <tr className="transaction-head">
            <th className="transaction-head-item">Type</th>
            <th className="transaction-head-item">Amount</th>
            <th className="transaction-head-item">Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(transaction => (
            <tr className="transaction-body-container" key={transaction.id}>
              <td className="transaction-body-item">{transaction.type}</td>
              <td className="transaction-body-item">{transaction.amount}</td>
              <td className="transaction-body-item">{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default TransactionHistory;