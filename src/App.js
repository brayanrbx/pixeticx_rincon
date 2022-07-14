import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className='p-2 font-oswald'>
        <ItemListContainer greeting={'Welcome'} />
        <ItemDetailContainer />
      </main>
    </div>
  );
};

export default App;