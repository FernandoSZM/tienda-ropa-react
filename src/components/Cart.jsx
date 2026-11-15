import { money } from '../data';
export default function Cart({ open, items, onClose, onRemove }) {
  if (!open) return null;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = encodeURIComponent('Hola, quiero realizar este pedido:\n' + items.map(i => `${i.quantity} x ${i.name} — ${money(i.price * i.quantity)}`).join('\n') + `\nTotal: ${money(total)}`);
  return <div className="overlay" onClick={onClose}>
    <aside className="cart-panel" onClick={e => e.stopPropagation()}>
      <div className="cart-head"><div><span className="eyebrow">TU SELECCIÓN</span><h2>Tu carrito</h2></div><button className="close-button" onClick={onClose}>×</button></div>
      {items.length === 0 ? <div className="empty-cart"><span>♡</span><h3>Tu carrito está vacío</h3><p>Encuentra algo que te encante.</p><button className="dark-button" onClick={onClose}>Ver colección</button></div> : <>
        <div className="cart-items">{items.map(item => <div className="cart-item" key={item.id}><img src={item.image} alt=""/><div className="cart-item-info"><h3>{item.name}</h3><p>{item.quantity} × {money(item.price)}</p><button onClick={() => onRemove(item.id)}>Eliminar</button></div><strong>{money(item.price * item.quantity)}</strong></div>)}</div>
        <div className="cart-bottom"><div className="total-line"><span>Subtotal</span><strong>{money(total)}</strong></div><p>El costo de envío se coordina al confirmar el pedido.</p><a className="checkout-button" href={`https://wa.me/?text=${message}`} target="_blank" rel="noreferrer">Finalizar por WhatsApp ↗</a></div>
      </>}
    </aside>
  </div>;
}
