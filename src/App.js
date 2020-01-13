import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './containers/About'
import Home from './containers/Home'
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
      </Switch>
    </div>
  );
}

export default App;
