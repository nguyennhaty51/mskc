import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

export default function Home() {
  return (
    <main style={{ display: 'flex', gap: '2rem', padding: '2rem', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}