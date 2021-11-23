import './App.css';
// import Cards from './components/cards/Cards';
// import Header from './components/header/Header';
import Widgets from './components/widgets/Widgets';

function App() {
  return (
    <div className="p-3 md:px-8 lg:px-20  xl:px-44 2xl:px-80 xl:pt-5">
      <div className="container space-y-28">
        {/* <Header />
        <Cards /> */}
        <Widgets />
      </div>
    </div>
  );
}

export default App;
