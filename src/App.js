import { Routes, Route } from "react-router-dom";
import { CardProvider } from './context/CartContext';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './views/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer';
import Contact from "./views/Contact";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <CardProvider>
      <div className="App font-poppins grid grid-rows-[auto_1fr_auto]">
        <header className="p-2">
          <Navbar />
        </header>
        <main className='p-2'>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <Footer />
        </footer>
      </div>
    </CardProvider>
  );
};

export default App;