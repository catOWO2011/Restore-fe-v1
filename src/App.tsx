import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState<{name: string, price: number}[]>([
    { name: 'product1', price: 100.00 },
    { name: 'product2', price: 200.00 }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://localhost:5001/api/products');
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const addProduct = () => {
    setProducts(prevState => [...prevState, { name: 'product' + (products.length + 1), price: (products.length) * 100.00 + 100 }]);
  };

  return (
    <div>
      <h1>Re-store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
