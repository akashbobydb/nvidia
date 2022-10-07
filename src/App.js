import './App.css';
import NavBar from './components/Navbar/NavBar';
import Banne from './components/Banner/Banne'
import LatestNews from './components/Cards/LatestNews';
import GameShop from './components/Cards/GameShop';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div >
      <NavBar/>
      <Banne/>
      <LatestNews/>
      <GameShop/>
      <Footer/>
      {/* <Subfooter/> */}
    </div>
  );
}

export default App;
