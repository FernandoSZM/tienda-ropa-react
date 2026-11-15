import { money } from '../data';
export default function ProductCard({ product, onAdd }) {
  return <article className="product-card">
    <div className="product-image-wrap">
      <img src={product.image} alt={product.name} loading="lazy" />
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <button className="quick-add" onClick={() => onAdd(product)}>Agregar al carrito <span>＋</span></button>
    </div>
    <div className="product-info"><div><h3>{product.name}</h3><p>{product.category}</p></div><strong>{money(product.price)}</strong></div>
  </article>;
}
