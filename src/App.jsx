import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products } from './data';

const categories = ['Todo', 'Camisetas', 'Sudaderas', 'Camisas', 'Pantalones'];
export default function App() {
  const [category, setCategory] = useState('Todo');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const visibleProducts = useMemo(() => category === 'Todo' ? products : products.filter(p => p.category === category), [category]);
  const addToCart = product => setCart(current => {
    const found = current.find(item => item.id === product.id);
    return found ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
  });
  const removeFromCart = id => setCart(current => current.filter(item => item.id !== id));
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return <>
    <div className="announcement">ENVÍOS A TODO COSTA RICA · ESTILO SIN COMPLICACIONES</div>
    <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
    <main>
      <section className="hero" id="inicio">
        <img className="hero-image" src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=2200&q=90" alt="Colección de moda urbana" />
        <div className="hero-shade" />
        <div className="hero-content"><span className="eyebrow light">NUEVA COLECCIÓN · 2026</span><h1>Vístete como<br/><em>te sientes.</em></h1><p>Prendas esenciales. Estilo propio.<br/>Hecho para acompañarte todos los días.</p><a className="light-button" href="#catalogo">Explorar colección <span>↗</span></a></div>
        <span className="hero-index">01 — 06 / DAILY ESSENTIALS</span>
      </section>
      <section className="intro-strip" id="nosotros"><span>MENOS RUIDO, MÁS ESTILO.</span><p>Una selección de básicos que hablan por ti.</p><span>FORMA® — COSTA RICA</span></section>
      <section className="catalog" id="catalogo">
        <div className="section-heading"><div><span className="eyebrow">ENCUENTRA TU ESTILO</span><h2>La colección<span>.</span></h2></div><p>Piezas versátiles para todos los días.<br/>Elige tus favoritas.</p></div>
        <div className="filters" aria-label="Filtrar productos">{categories.map(item => <button key={item} className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="product-grid">{visibleProducts.map(product => <ProductCard key={product.id} product={product} onAdd={addToCart}/>)}</div>
      </section>
      <section className="newsletter"><span className="eyebrow light">FORMA PARTE</span><h2>Tu estilo empieza<br/><em>con lo esencial.</em></h2><a href="#catalogo" className="light-button">Descubrir prendas ↗</a></section>
    </main>
    <footer><a className="logo" href="#inicio">FORMA<span>.</span></a><p>Estilo cotidiano, a tu manera.</p><span>© 2026 FORMA. COSTA RICA.</span></footer>
    <Cart open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart}/>
  </>;
}
