export const products = [
  { id: 1, name: 'Camiseta Essential', category: 'Camisetas', price: 8990, tag: 'MÁS VENDIDO', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85' },
  { id: 2, name: 'Sudadera Daily', category: 'Sudaderas', price: 18990, tag: 'NUEVO', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85' },
  { id: 3, name: 'Camisa Relaxed', category: 'Camisas', price: 14990, tag: '', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85' },
  { id: 4, name: 'Pantalón Street', category: 'Pantalones', price: 21990, tag: '', image: 'https://images.unsplash.com/photo-1519895613476-8c3c7e1f6b2b?auto=format&fit=crop&w=900&q=85' },
  { id: 5, name: 'Camiseta Oversize', category: 'Camisetas', price: 10990, tag: 'NUEVO', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85' },
  { id: 6, name: 'Hoodie Minimal', category: 'Sudaderas', price: 19990, tag: '', image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85' },
];
export const money = value => new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC', maximumFractionDigits: 0 }).format(value);
