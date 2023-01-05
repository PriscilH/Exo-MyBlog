import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NavigationMenu from './components/Navigation/NavigationMenu';
import Footer from './components/Footer'


function App() {
  return (
    <>
    <div className="wrap">
    <Header/>
    <NavigationMenu/>
    <Content/>
    </div>
    <Footer/>
    </>
  );
}
export default App;
