import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/productsServices';
import { Card, Button, Typography, Spin } from 'antd';

const { Meta } = Card;
const { Title } = Typography;

const ProductosPorCategoria = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(data => {
        const filtrados = data.filter(
          p => p.category.toLowerCase() === categoria.toLowerCase()
        );
        setProductos(filtrados);
      })
      .catch(() => setProductos([]))
      .finally(() => setLoading(false));
  }, [categoria]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Title
        level={2}
        style={{
          textTransform: 'capitalize',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        {categoria}
      </Title>

      {productos.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            paddingTop: '1rem',
            rowGap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {productos.map(p => (
            <Card
              key={p.id}
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt={p.name}
                  src={p.image}
                  style={{ height: 180, objectFit: 'contain', padding: 8 }}
                />
              }
            >
              <Meta title={p.name} description={`Stock disponible: ${p.stock}`} />
              <div style={{ marginTop: 12, textAlign: 'center' }}>
                <Link to={`/product/${p.id}`}>
                  <Button type="primary" size="small" ghost>
                    Detalle
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductosPorCategoria;



