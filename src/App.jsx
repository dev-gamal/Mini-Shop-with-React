import { useState } from 'react'
import productsData from './data/products.json'

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); 

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mini Shop with React 19</h1>
      <p>The catalogue contains {products.length} articles.</p>
    </div>
  )
}

export default App
