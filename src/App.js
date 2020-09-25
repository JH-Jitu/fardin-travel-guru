import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Book from './Components/Book/Book';
import BookingConfirm from './Components/BookingConfirm/BookingConfirm';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import { Container } from '@material-ui/core';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header> <br/>
      <Container>
      <Switch>
        <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route exact path="/book/:placeLink">
      <Book></Book>
      </Route>
      <Route path="/login">
            <Login></Login>
          </Route>
      <PrivateRoute exact path="/book/confirm/:placeLink">
      <BookingConfirm></BookingConfirm>
      
      </PrivateRoute>
      </Switch> 
      </Container>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
