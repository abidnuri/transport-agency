import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import NotMatch from './components/NotMatch/NotMatch';
import FinalDestination from './components/FinalDestination/FinalDestination';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer'


export const UserContext = createContext();


function App(props) {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination />
          </PrivateRoute >
          <PrivateRoute path="/finalDestination/:id">
            <FinalDestination />
          </PrivateRoute >
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>        
      </Router>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
