export default function Navbar({ cartCount, onCartClick }) {
  return <header className="navbar">
    <a className="logo" href="#inicio">FORMA<span>.</span></a>
    <nav><a href="#inicio">Inicio</a><a href="#catalogo">Colección</a><a href="#nosotros">Nosotros</a></nav>
    <button className="cart-button" onClick={onCartClick} aria-label="Abrir carrito">Carrito <span>{cartCount}</span></button>
  </header>;
}
