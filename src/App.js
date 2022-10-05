import './App.css';
import NavBar from './components/Navbar/NavBar';
import Banne from './components/Banner/Banne'
import LatestNews from './components/Cards/LatestNews';
import GameShop from './components/Cards/GameShop';

function App() {
  return (
    <div >
      <NavBar/>
      <Banne/>
      <LatestNews/>
      <GameShop/>
    </div>
  );
}

export default App;
