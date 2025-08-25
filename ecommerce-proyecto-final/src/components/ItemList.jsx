import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', 
        gap: 16,
        marginTop: 80,
        marginBottom: 80, 
      }}
    >
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};



export default ItemList;
