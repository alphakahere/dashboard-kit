import './App.css';
import Cards from './components/cards/Cards';
import Header from './components/header/Header';

function App() {
  return (
    <div className="p-3 md:px-8 lg:px-20  xl:px-32 2xl:px-64 xl:pt-5">
      <div className="container">
        <Header />
        <Cards />
      </div>
    </div>
  );
}

export default App;
