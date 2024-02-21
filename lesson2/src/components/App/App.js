import './App.css';
import Product from '../Product/Product';

function App() {
  return (
    <div className="App">
      <h1>Магаз</h1>
      <Product 
        imageSrc="https://i.ebayimg.com/images/g/kxUAAOSwcw1eXCgc/s-l500.jpg"
        name="Product Name"
        price="$19.99"
      />
    </div>
  );
}

export default App;
