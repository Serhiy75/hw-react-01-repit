import React from 'react';
import TransactionItem from './TransactionItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.containertab}>
      <h2 className={css.title}>Transaction History</h2>
      <table className={css['transaction-history']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
