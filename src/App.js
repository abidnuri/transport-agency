import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import VehicleDetails from './components/VehicleDetails/VehicleDetails';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Logged in User: {loggedInUser.name}</p>
      <Router><Header />
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination">
            <Home />
          </Route>
          <Route path="/blog">
            <Home />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/details">
            <VehicleDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch><Footer />
      </Router>
    </userContext.Provider>
  );
}

export default App;
