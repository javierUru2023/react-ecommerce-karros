import { useState, useContext } from 'react';
import { MenuUnfoldOutlined, UserOutlined, ProductOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './style.css';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const items = [
  {
    key: '1',
    icon: <MenuUnfoldOutlined style={{ color: '#005a5f' }} />,
    label: <Link to="/" style={{ textDecoration: 'none' }}>Inicio</Link>
  },
  {
    key: '2',
    icon: <UserOutlined style={{ color: '#005a5f' }} />,
    label: <Link to="/about" style={{ textDecoration: 'none' }}>Nosotros</Link>
  },
  {
    key: '3',
    icon: <ProductOutlined style={{ color: '#005a5f' }} />,
    label: 'Productos',
    popupClassName: 'popupProductos',
    children: [
      { key: '31', label: <Link to="/productos/encendido">Encendido</Link> },
      { key: '32', label: <Link to="/productos/mantenimiento">Mantenimiento</Link> },
      { key: '33', label: <Link to="/productos/frenos">Frenos</Link> },
      { key: '34', label: <Link to="/productos/suspension">Suspension</Link> },
      { key: '35', label: <Link to="/productos/electricidad">Electricidad</Link> },
      { key: '36', label: <Link to="/productos/lubricacion">Lubricacion</Link>
      }
    ]
  },
  {
    key: 'cart',
    icon: (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <ShoppingOutlined style={{ fontSize: 24, color: '#005a5f' }} />
        <CartBadge />
      </div>
    ),
    label: <Link to="/cart" style={{ textDecoration: 'none' }}>Carrito</Link>
  }
];

const getLevelKeys = items1 => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach(item => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

function CartBadge() {
  const { cartItems } = useContext(ShoppingCartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  if (totalItems === 0) return null;
  return (
    <span
      style={{
        position: 'absolute',
        top: -8,
        right: -12,
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
  );
}

const NavBar = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const onOpenChange = openKeys => {
    const currentOpenKey = openKeys.find(key => stateOpenKeys.indexOf(key) === -1);
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter(key => key !== currentOpenKey)
        .findIndex(key => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter(key => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', height: '150px', marginTop: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
        <img src="karro-logo.svg" alt="" width={150} height={150} />
        <h1 className='titleNavBar'>Karros Autopartes</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
        <Menu
          className='fontMenu'
          mode="horizontal"
          defaultSelectedKeys={['1']}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          items={items}
          style={{ flex: 1, minWidth: 550 }}
        />
      </div>
    </div>
  );
};

export default NavBar;

