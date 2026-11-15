# FORMA — tienda de ropa en React

Proyecto inicial creado con React + Vite. Incluye catálogo, filtros por categoría, carrito lateral y armado de pedido para WhatsApp.

## Requisitos
- Node.js (versión LTS recomendada): https://nodejs.org/
- Visual Studio Code

## Cómo ejecutarlo
1. Descomprime la carpeta `tienda-ropa-react`.
2. Abre esa carpeta en VS Code (`File > Open Folder`).
3. Abre una terminal en VS Code (`Terminal > New Terminal`).
4. Ejecuta:

   ```bash
   npm install
   npm run dev
   ```

5. Abre en el navegador la dirección que Vite muestra en la terminal (normalmente http://localhost:5173).

## Personalización
- Productos y precios: `src/data.js`
- Componentes: `src/components/`
- Página principal: `src/App.jsx`
- Estilos: `src/styles.css`

## Antes de vender
Reemplaza el nombre FORMA, fotos, productos y precios. En `src/components/Cart.jsx`, cambia el enlace `https://wa.me/?text=...` por tu número de WhatsApp en formato internacional (por ejemplo, 506XXXXXXXX, sin + ni espacios). El checkout actual prepara un pedido por WhatsApp; no procesa pagos ni descuenta inventario.
