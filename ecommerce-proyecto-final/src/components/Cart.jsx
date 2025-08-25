import React, { useContext, useState } from 'react';
import ContactForm from './ContactForm';
import { Typography, Divider, List, Card, Button, Modal, Form } from 'antd';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { createOrder } from '../services/orderService';

const { Title } = Typography;
const logoPrimary = '#005a5f';
const logoAccent = '#d4d600';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(ShoppingCartContext);
  const [buyer, setBuyer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [orderDetail, setOrderDetail] = useState(null);
  const [pendingPurchase, setPendingPurchase] = useState(false);

  const [form] = Form.useForm();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleContactFormFinish = (buyerData) => {
    const normalizado = {
      ...buyerData,
      notifications: buyerData.notifications ?? false // ← Corrección clave
    };
    setBuyer(normalizado);
    if (pendingPurchase) {
      confirmPurchase(normalizado);
      setPendingPurchase(false);
    }
  };

  const handleConfirmPurchase = () => {
    setPendingPurchase(true);
    form.submit();
  };

  const confirmPurchase = async (buyerData) => {
    if (!buyerData) {
      Modal.error({ title: 'Completa tus datos antes de confirmar la compra.' });
      return;
    }
    const order = {
      buyer: buyerData,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date()
    };
    try {
      const orderId = await createOrder(order);
      setOrderDetail({ ...order, orderId });
      setModalVisible(true);
      setBuyer(null);
      clearCart();
      setTimeout(() => setModalVisible(false), 3000);
    } catch (error) {
      Modal.error({ title: 'Error', content: error.message });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '60vh', padding: '2rem' }}>
      <Card
        style={{
          maxWidth: 800,
          width: '100%',
          padding: 24,
          textAlign: 'center',
          boxShadow: '0 4px 24px rgba(0, 90, 95, 0.15)',
          border: `1px solid #ffffff`,
        }}
        styles={{ body: { padding: 0 } }}
        cover={
          cartItems.length === 0
            ? (
              <img
                alt="Carrito vacío"
                src="/EmptyCart.jpg"
                style={{ maxHeight: 220, objectFit: 'contain', margin: '0 auto', padding: 16 }}
              />
            )
            : null
        }
      >
        {cartItems.length === 0 ? (
          <>
            <Title level={4} style={{ marginBottom: 16, color: logoPrimary }}>¡Tu carrito está vacío!</Title>
            <p style={{ color: logoAccent, fontWeight: 'bold' }}>Agrega productos para verlos aquí.</p>
          </>
        ) : (
          <>
            <Title level={2} style={{ textAlign: 'center', color: logoPrimary }}>Carrito de Compras</Title>
            <div style={{ textAlign: 'center', marginBottom: '1rem', color: logoAccent }}>
              <strong>Total de ítems seleccionados: {totalItems}</strong>
            </div>
            <Divider orientation="left" style={{ borderColor: logoAccent }}>Mis Productos Seleccionados</Divider>
            <List
              dataSource={cartItems}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Button
                      danger
                      type="primary"
                      size="small"
                      onClick={() => handleRemove(item.id)}
                      style={{ background: logoAccent, borderColor: logoAccent, color: logoPrimary }}
                    >
                      Eliminar
                    </Button>
                  ]}
                  style={{ boxShadow: '0 2px 8px rgba(0, 90, 95, 0.10)', margin: '8px 0', borderRadius: 8 }}
                >
                  <List.Item.Meta
                    title={<span style={{ color: logoPrimary }}>{item.name}</span>}
                    description={
                      <span>
                        <span style={{ color: logoAccent }}>Cantidad: {item.quantity}</span> | Precio unitario: ${item.price}
                      </span>
                    }
                  />
                  <div>
                    <strong style={{ color: logoPrimary }}>Total:</strong> ${item.price * item.quantity}
                  </div>
                </List.Item>
              )}
            />
            <Divider orientation="left" style={{ borderColor: logoAccent }}>Formulario de Contacto</Divider>
            <ContactForm onFinish={handleContactFormFinish} form={form} />
            <Button
              type="primary"
              style={{
                marginTop: 24,
                background: logoAccent,
                borderColor: logoAccent,
                color: logoPrimary,
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
              onClick={handleConfirmPurchase}
              block
            >
              Confirmar compra
            </Button>
          </>
        )}
      </Card>
      <Modal
        open={modalVisible}
        title="¡Compra confirmada!"
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        {orderDetail && (
          <div>
            <p><strong>ID de orden:</strong> {orderDetail.orderId}</p>
            <p><strong>Comprador:</strong> {orderDetail.buyer.name} ({orderDetail.buyer.email})</p>
            <p><strong>Total:</strong> ${orderDetail.total}</p>
            <Divider />
            <List
              dataSource={orderDetail.items}
              renderItem={item => (
                <List.Item>
                  {item.name} x {item.quantity} = ${item.price * item.quantity}
                </List.Item>
              )}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Cart;
