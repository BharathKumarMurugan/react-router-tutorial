import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h3>Home Page</h3>;
};

export default App;
