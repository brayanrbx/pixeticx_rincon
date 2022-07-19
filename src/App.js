import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './views/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer';
import Faq from "./views/Faq";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className='p-2 font-oswald'>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Welcome" />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;