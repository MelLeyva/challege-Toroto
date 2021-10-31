import "./App.scss";
import NavBar from "./Components/Header/header.js";
import GetData from "./Components/MainPage/getData.js";
import Footer from "./Components/Footer/footer.js";
import Mapp from "./Components/MainPage/map.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./Components/CurrentProject/currentProject.js";
//import Project from "./Components/CurrentProject/currentProject";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route path="/project/:id">
              <Project />
            </Route>
            <Route path="/">
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
