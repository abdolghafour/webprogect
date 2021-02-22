import React, { Component } from 'react';
import ScrollToTop from "./scrolltop";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/medsy-minimal';
import Footer from "./Footer";

function App() {
return (
  <>
     <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>
        </Switch>
      </Router>
      <Footer />
   <ScrollToTop />
  </>
)
}

export default App;