import "./App.scss";
import NavBar from "./Components/Header/Header.jsx";
import GetData from "./Components/MainPage/GetData.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Mapp from "./Components/MainPage/Map.jsx";
import Text from "./Components/MainPage/ProposeText";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./Components/CurrentProject/Data.jsx";
// import DataProject from "./Components/CurrentProject/DataProjects";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route path="/proyectos/:id" exact>
              <Project />
            </Route>
            <Route path="/" exact> 
              <Text />
              <Mapp />
              <GetData />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
