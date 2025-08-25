
import React from 'react';

const CartWidget = ({ totalItems }) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <i className="fa fa-shopping-cart" style={{ fontSize: 28, color: '#005a5f' }} />
    {totalItems > 0 && (
      <span
        style={{
          position: 'absolute',
          top: -8,
          right: -8,
          background: '#d4d600',
          color: '#005a5f',
          borderRadius: '50%',
          padding: '2px 8px',
          fontSize: 12,
          fontWeight: 'bold',
          minWidth: 20,
          textAlign: 'center',
        }}
      >
        {totalItems}
      </span>
    )}
  </div>
);

export default CartWidget;
