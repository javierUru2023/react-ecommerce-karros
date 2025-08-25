import { useState, useEffect } from 'react';
import { Button } from 'antd';

const ItemCount = ({ initial = 1, stock = 10, onChange }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    if (onChange) onChange(contador);
  }, [contador]);

  const incrementar = () => {
    if (contador < stock) setContador(prev => prev + 1);
  };

  const decrementar = () => {
    if (contador > 1) setContador(prev => prev - 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button
        onClick={incrementar}
        type="primary"
        ghost
        style={{ width: 40, marginRight: 5 }}
      >
        +
      </Button>

      <Button
        style={{
          borderRadius: '50%',
          width: 40,
          height: 40,
          marginRight: 5,
          cursor: 'default',
          pointerEvents: 'none',
        }}
      >
        {contador}
      </Button>

      <Button
        onClick={decrementar}
        type="primary"
        danger
        ghost
        style={{ width: 40 }}
      >
        -
      </Button>
    </div>
  );
};

export default ItemCount;
