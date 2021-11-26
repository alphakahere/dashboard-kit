import './App.css'; 
// import Charts from './components/charts/Charts';
// import Grids from './components/grids/Grids';
// import Cards from './components/cards/Cards';
// import Header from './components/header/Header';
// import Widgets from './components/widgets/Widgets';
// import Icons from './components/icons/Icons';
import Dashboards from './components/dashboards/Dashboards';

function App() {
  return (
    <div className="p-3 md:px-8 lg:px-20  xl:px-44 2xl:px-80 xl:pt-5">
      <div className="container space-y-28">
        {/* <Header />
        <Cards />
        <Widgets />
        <Grids />
        <Icons /> */}
        <Dashboards />
        {/* <Charts /> */}
      </div>
    </div>
  );
}

export default App;
