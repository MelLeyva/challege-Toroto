import './App.scss';
import NavBar from './Components/Header/Header';
import GetData from './Components/MainPage/GetData';
import Footer from './Components/Footer/Footer';
import Mapp from './Components/MainPage/Map'
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
