import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Products';

function App() {
  const props = {title:"Product1",description:"Description of Product 1"}

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='product-grid'>
        <Product />
      </div>
    </div>
  );
}

export default App;
