import { useState, useEffect } from 'react';
import { getProducts } from '../services/productsServices';
import ItemList from './ItemList';
import { Result, Spin } from 'antd';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <Result
        status="error"
        title="Error al cargar productos"
        subTitle="Intente nuevamente más tarde."
      />
    );
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Explora nuestra amplia gama de productos.</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
