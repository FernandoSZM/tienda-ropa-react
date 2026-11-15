export default function Navbar({ cartCount, onCartClick }) {
  return <header className="navbar">
    <a className="logo" href="#inicio" aria-label="FRCHO, inicio">FRCHO<span>®</span></a>
    <nav aria-label="Navegación principal"><a href="#inicio">Inicio</a><a href="#catalogo">Colección</a><a href="#nosotros">Nosotros</a></nav>
    <button className="cart-button" onClick={onCartClick} aria-label={`Abrir carrito, ${cartCount} artículos`}>BOLSA <span>{String(cartCount).padStart(2, '0')}</span></button>
  </header>;
}
