import { Typography, Image } from 'antd';
import './About.css';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card-horizontal">
        <div className="about-image-side">
          <Image
            src="/auto-parts.jpg"
            alt="Banner Karros Autopartes"
            preview={false}
            className="about-image"
          />
        </div>
        <div className="about-content-side">
          <Title level={2} className="about-title">Sobre Nosotros</Title>
          <Paragraph className="about-text">
            En <strong>Karros Autopartes</strong>, nos apasiona brindar soluciones confiables y de alta calidad para tu vehículo. Con años de experiencia en el rubro, nos hemos consolidado como referentes en repuestos, accesorios y asesoramiento personalizado.
          </Paragraph>
          <Paragraph className="about-text">
            Nuestro compromiso es claro: ofrecer productos duraderos, atención cercana y una experiencia de compra ágil, tanto en tienda como online. Cada pieza que vendemos está respaldada por nuestro conocimiento técnico y nuestra dedicación al cliente.
          </Paragraph>
          <Paragraph className="about-text">
            Ya seas mecánico, entusiasta del automovilismo o simplemente buscás mantener tu auto en óptimas condiciones, en Karros encontrás el respaldo que necesitás.
          </Paragraph>
          <Paragraph className="about-text">
            <em>Gracias por confiar en nosotros.</em>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default About;






