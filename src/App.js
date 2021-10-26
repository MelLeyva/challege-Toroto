import './App.scss';
import NavBar from './Components/Header/header';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/> 
        <Footer/>
      </header>
    </div>
  );
}

export default App;
