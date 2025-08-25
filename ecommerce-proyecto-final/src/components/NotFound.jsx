
import { Card, Typography, Button } from 'antd';
import './NotFound.css';

const { Title, Paragraph } = Typography;

const NotFound = () => {
  return (
    <div className="notfound-container">
      <Card
        variant="outlined" 
        className="notfound-card"
        styles={{ body: { padding: '24px' } }} 
      >
        <img
          src="../../public/NotFoundPage.jpg"
          alt="Página no encontrada"
          className="notfound-image"
        />
        <Title level={2}>404 - Página no encontrada</Title>
        <Paragraph>
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </Paragraph>
        <Button type="primary" href="/">
          Volver al inicio
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
