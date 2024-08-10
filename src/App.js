import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    fetchApi();
  }, []);

  return (
    <div>
  
      <div className="container">
        {data.map((product) => (
          <div className="product-card" key={product.id}>
            <h1>{product.title}</h1>
            <p>RS : {product.price}</p>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
