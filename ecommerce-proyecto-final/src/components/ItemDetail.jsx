
import { useEffect, useState, useContext } from 'react';
import { Card, Typography, Button, message, Spin } from 'antd';
const { Meta } = Card;
const { Text } = Typography;

import ItemCount from './ItemCount';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../services/productsServices';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    setAgregado(false);
  }, [cantidad]);

  useEffect(() => {
    getProducts()
      .then(products => {
        const found = products.find(p => String(p.id) === String(id));
        setProduct(found || null);
      })
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, cantidad);
      message.success(`${cantidad} x ${product.name} agregado al carrito`);
      setAgregado(true);
    }
  };

  if (!product && !loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 80 }}>
        <Text type="danger">Producto no encontrado</Text>
      </div>
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
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 16px' }}>
      <Card
        hoverable
        style={{
          width: '100%',
          maxWidth: 500,
          padding: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
        cover={
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff' }}>
            <img
              alt={product.name}
              src={product.image}
              style={{
                maxHeight: 300,
                width: '100%',
                objectFit: 'contain',
                padding: 16,
                borderRadius: '8px',
              }}
            />
          </div>
        }
      >
        <Meta title={product.name} description={product.description} style={{ marginBottom: 16 }} />
        <Text><strong>Categoría:</strong> {product.category}</Text><br />
        <Text><strong>Stock disponible:</strong> {product.stock}</Text><br />
        <Text strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: 8 }}>
          Precio: ${product.price}
        </Text>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <ItemCount initial={1} stock={product.stock} onChange={setCantidad} />
          <Button
            type="primary"
            onClick={handleAddToCart}
            disabled={agregado}
          >
            {agregado ? 'Agregado' : 'Agregar al carrito'}
          </Button>
        </div>

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => navigate(-1)}>Volver al listado</Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemDetail;
