import '../css/transaction.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      {items.map(item => {
        return (
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        );
      })}
    </table>
  );
};
