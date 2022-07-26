import { Routes, Route } from "react-router-dom";
import { CardProvider } from './context/CartContext';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './views/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer';
import Faq from "./views/Faq";
import Contact from "./views/Contact";
import Cart from "./views/Cart";

function App() {
  return (
    <CardProvider>
      <div className="App font-poppins">
        <header className="p-2">
          <Navbar />
        </header>
        <main className='p-2'>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Welcome" />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </CardProvider>
  );
};

export default App;