# Karros Autopartes - E-commerce React

Este proyecto es una tienda online desarrollada con **React**, **Vite** y **Ant Design**. Permite explorar productos, filtrar por categoría, ver detalles, agregar al carrito y realizar compras con integración a Firebase.

## Características

- Catálogo de productos con imágenes y detalles.
- Filtrado por categorías.
- Detalle de producto con selector de cantidad (`ItemCount`) y botón rápido de agregar al carrito.
- Carrito de compras con formulario de contacto y confirmación de orden.
- Spinner de carga en vistas de productos y detalle.
- Footer adaptado a la marca.
- Navegación con React Router.
- Persistencia de datos con Firebase.

## Instalación

1. Clona el repositorio:

   ```
   git clone https://github.com/tu-usuario/react-ecommerce-karros.git
   cd react-ecommerce-karros
   ```

2. Instala las dependencias:

   ```
   npm install
   ```

3. Configura Firebase:

   - Crea un archivo `src/firebase/config.js` con tus credenciales de Firebase.

4. Inicia el proyecto:

   ```
   npm run dev
   ```

## Estructura del proyecto

```
src/
├── components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   ├── ItemListContainer.jsx
│   ├── ItemList.jsx
│   ├── ItemDetail.jsx
│   ├── ItemCount.jsx
│   ├── Cart.jsx
│   ├── ContactForm.jsx
│   ├── ProductosPorCategoria.jsx
│   └── ...
├── context/
│   └── ShoppingCartContext.jsx
├── services/
│   ├── productsServices.js
│   └── orderService.js
├── firebase/
│   └── config.js
├── App.jsx
├── App.css
└── main.jsx
```

## Tecnologías y versiones

- **React**: 18.x
- **Vite**: 4.x
- **Ant Design**: 5.x
- **Firebase**: 9.x (modular)
- **React Router DOM**: 6.x

> Puedes ver las versiones exactas en tu archivo `package.json`.

## Uso

- Explora productos desde la página principal.
- Filtra por categoría usando el menú.
- Haz clic en "Detalle" para ver información y seleccionar cantidad.
- Agrega productos al carrito y confirma la compra.
- Completa el formulario de contacto para finalizar la orden.

## Autor

Javier - Karros Autopartes
