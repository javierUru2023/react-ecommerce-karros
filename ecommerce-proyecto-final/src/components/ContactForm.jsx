import React from 'react';
import { Form, Input, Checkbox, Typography } from 'antd';

const { Title } = Typography;

const ContactForm = ({ onFinish, form }) => (
  <div style={{ maxWidth: 500, margin: '0 auto', padding: '2rem' }}>
    <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>
      Formulario de Contacto
    </Title>
    <Form
      layout="vertical"
      onFinish={onFinish}
      name="contactForm"
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: 'Ingrese su nombre' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Ingrese su email' },
          { type: 'email', message: 'Email inválido' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Teléfono"
        name="phone"
        rules={[{ required: true, message: 'Ingrese su teléfono' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="notifications" // ← CAMBIO CLAVE: antes era "suscripcion"
        valuePropName="checked"
      >
        <Checkbox>Quiero recibir novedades y promociones</Checkbox>
      </Form.Item>
    </Form>
  </div>
);

export default ContactForm;

