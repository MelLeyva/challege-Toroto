import './App.scss';
import NavBar from './Components/Header/header';
import GetData from './Components/MainPage/getData';
import Footer from './Components/Footer/footer';
import Mapp from './Components/MainPage/map'
import React from "react";

function App() {
   return (
    <div className="App">
        <NavBar/> 
      <main>
        <Mapp/>
        <GetData/>
      </main>
        <Footer/>   
    </div>
  );
}


export default App;
