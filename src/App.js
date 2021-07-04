import React, { useCallback, useEffect, useState } from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';
import routes from './route';
function App() {
  let RenderContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((value, index) => {
        return (
          <Route
            key={index}
            path={value.path}
            exact={value.exact}
            component={value.main}
          />
        );
      })
    }
    return result;
  }
  return (
    <Router>
      <NavBar />
      <Switch>
        {RenderContent(routes)}
      </Switch>
      <Footer />
      <BackToTop />
    </Router>

  )
}


export default App;
