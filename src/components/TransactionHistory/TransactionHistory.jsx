import "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{items.Type}</th>
          <th>{items.Amount}</th>
          <th>{items.Currency}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TransactionHistory;
