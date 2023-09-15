import React from 'react';

const TransactionItem = ({ amount, type, currency }) => {
  return (
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
};

export default TransactionItem;
