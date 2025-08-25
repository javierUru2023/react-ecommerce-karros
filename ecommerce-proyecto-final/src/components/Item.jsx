import { Card, Button, Typography } from 'antd';
const { Text } = Typography;
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  const { name, image, stock } = product;

  return (
    <Card
    hoverable
    style={{ width: 220 }}
    styles={{
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        padding: 12
      }
  }}
>
      <img
        src={image}
        alt={name}
        style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', padding: '1rem', }}
      />

      <Text strong style={{ textAlign: 'center' }}>{name}</Text>
      <Text type={stock === 0 ? 'danger' : 'secondary'}>
        Stock: {stock}
      </Text>

      <Button type="primary" size="small" ghost>
        <Link to={`/product/${product.id}`}>Detalle</Link>
      </Button>

    </Card>
  );
};

export default Item;






