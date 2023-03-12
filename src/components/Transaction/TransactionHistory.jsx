import Transaction from './Transaction';
import data from '../../data/transactions';

export default function TransactionHistory() {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction data={data} />
      </tbody>
    </table>
  );
}
