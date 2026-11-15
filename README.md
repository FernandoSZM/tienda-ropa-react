# FRCHO® — Clothing Store

Tienda de ropa construida con React + Vite. Incluye una portada editorial, catálogo filtrable, tarjetas de producto, carrito lateral y preparación de pedidos por WhatsApp.

## Requisitos
- Node.js (versión LTS): https://nodejs.org/
- Git

## Ejecutar localmente
```bash
npm install
npm run dev
```

Abrí la URL local que muestra Vite (normalmente http://localhost:5173).

## Estructura
- `src/App.jsx`: composición de la página y estado del catálogo/carrito.
- `src/components/Navbar.jsx`: navegación y acceso al carrito.
- `src/components/ProductCard.jsx`: tarjeta individual de producto.
- `src/components/Cart.jsx`: carrito y enlace para preparar pedido por WhatsApp.
- `src/data.js`: catálogo de ejemplo, precios e imágenes.
- `src/styles.css`: identidad visual y estilos responsive.

## Personalización antes de vender
1. Reemplazá productos, precios e imágenes de ejemplo en `src/data.js` por información real y autorizada.
2. En `src/components/Cart.jsx`, reemplazá `https://wa.me/?text=...` por `https://wa.me/506XXXXXXXX?text=...` usando el número comercial en formato internacional, sin `+` ni espacios.
3. El carrito actual prepara un pedido por WhatsApp; no procesa pagos, reserva inventario ni calcula automáticamente el envío.
4. Configurá políticas de entrega, cambios, privacidad y contacto antes de publicar la tienda.

## Publicar cambios en GitHub
```bash
git add .
git commit -m "Refresh FRCHO brand and storefront design"
git push
```
