import './App.css';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Map from './Map/Map';

function App() {
  return (
    <div className="App">
      <Nav className='nav'/>
      <Home className='home'/>
      <Map className='map'/>
    </div>
  );
}

export default App;
