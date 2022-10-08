import './App.css';
import NavBar from './components/Navbar/NavBar';
import Banne from './components/Banner/Banne'
import LatestNews from './components/Cards/LatestNews';
import GameShop from './components/Cards/GameShop';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu-List/Menu';
import Login from './components/Login-page/Login';
function App() {
  return (
    <div >
      <NavBar/>
      {/* <Banne/>
      <LatestNews/>
      <GameShop/>
      <Footer/> */}
      {/* <Subfooter/> */}
      {/* <Menu/> */}
      <Login/>
    </div>
  );
}

export default App;
