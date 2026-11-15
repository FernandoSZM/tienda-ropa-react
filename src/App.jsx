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
  const visibleProducts = useMemo(
    () => category === 'Todo' ? products : products.filter(product => product.category === category),
    [category]
  );

  const addToCart = product => setCart(current => {
    const found = current.find(item => item.id === product.id);
    return found
      ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { ...product, quantity: 1 }];
  });
  const removeFromCart = id => setCart(current => current.filter(item => item.id !== id));
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return <>
    <div className="announcement"><span>FRCHO STUDIO</span><i /> ENVÍOS A TODO COSTA RICA <i /> VISTE A TU MANERA</div>
    <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
    <main>
      <section className="hero" id="inicio">
        <img className="hero-image" src="https://images.pexels.com/photos/29083066/pexels-photo-29083066.jpeg?cs=srgb&dl=pexels-spencphoto-29083066.jpg&fm=jpg" alt="Esquina urbana con arte callejero en San José, Costa Rica" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow light">NUEVA TEMPORADA / 2026</span>
          <h1>Own your<br /><span className="hero-word-wrap"><em>everyday.</em><span className="brush-stroke brush-stroke-hero" aria-hidden="true" /></span></h1>
          <p>Vestí tu esencia. Elegí sin reglas.<br />Prendas para todos los días, con actitud propia. Hecho desde Costa Rica.</p>
          <a className="light-button" href="#catalogo">EXPLORAR COLECCIÓN <span>↗</span></a>
        </div>
        <div className="hero-bottom"><span>01 / 04</span><span>DAILY UNIFORM — SAN JOSÉ, COSTA RICA</span></div>
      </section>

      <section className="brand-note" id="nosotros">
        <span className="eyebrow">NO ES SOLO LO QUE VESTÍS.</span>
        <p>Es cómo <em>lo llevás.</em></p>
        <span className="brand-note-side">FRCHO® — EST. 2026</span><span className="brush-stroke brush-stroke-note" aria-hidden="true" />
      </section>

      <section className="benefits" aria-label="Beneficios de FRCHO">
        <div><span className="benefit-icon">✳</span><div><strong>ESTILO SIN ESFUERZO</strong><p>Esenciales que combinan con vos.</p></div></div>
        <div><span className="benefit-icon">↗</span><div><strong>ENVÍOS NACIONALES</strong><p>Llevamos FRCHO hasta tu puerta.</p></div></div>
        <div><span className="benefit-icon">♡</span><div><strong>HECHO PARA VOS</strong><p>Elegí las piezas que te representan.</p></div></div>
      </section>

      <section className="catalog" id="catalogo"><span className="brush-stroke brush-stroke-catalog" aria-hidden="true" />
        <div className="section-heading">
          <div><span className="eyebrow">SELECCIÓN FRCHO / 001</span><h2>La colección<span>.</span></h2></div>
          <p>Menos, pero mejor.<br />Descubrí tus nuevos favoritos.</p>
        </div>
        <div className="catalog-toolbar">
          <div className="filters" aria-label="Filtrar productos">
            {categories.map(item => <button key={item} className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}
          </div>
          <span className="product-count">{visibleProducts.length} PRODUCTOS</span>
        </div>
        <div className="product-grid">{visibleProducts.map(product => <ProductCard key={product.id} product={product} onAdd={addToCart} />)}</div>
      </section>

      <section className="manifesto">
        <div className="manifesto-image"><img src="https://images.pexels.com/photos/29083048/pexels-photo-29083048.jpeg?cs=srgb&dl=pexels-spencphoto-29083048.jpg&fm=jpg" alt="Callejón con arte urbano en San José, Costa Rica" loading="lazy" /></div>
        <div className="manifesto-copy"><span className="eyebrow light">EL MANIFIESTO FRCHO</span><h2>Tu estilo.<br /><em>Tus reglas.</em></h2><p>Nacimos con inspiración urbana y espíritu tico. Creemos en vestirse para uno mismo, en piezas que se sienten bien y te acompañan a donde sea que vayás.</p><a href="#catalogo" className="outline-button">ENCONTRÁ TU ESTILO ↗</a></div>
      </section>

      <section className="newsletter"><span className="eyebrow light">MANTENTE CERCA</span><h2>Lo nuevo está<br /><em>por llegar.</em></h2><p>Seguí descubriendo prendas, ideas y novedades de FRCHO.</p><a href="#catalogo" className="light-button">DESCUBRIR FRCHO ↗</a></section>
    </main>
    <footer>
      <div className="footer-main"><a className="logo footer-logo" href="#inicio">FRCHO<span>®</span></a><p>Vestí tu esencia. Elegí sin reglas.</p><a href="#inicio" className="back-top">VOLVER ARRIBA ↑</a></div>
      <div className="footer-bottom"><span>© 2026 FRCHO. HECHO EN COSTA RICA.</span><span>HECHO PARA EL DÍA A DÍA.</span></div>
    </footer>
    <Cart open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
  </>;
}
