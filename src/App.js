import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import View from './components/View';
import Error from './components/Error';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/adduser' component={AddUser} />
          <Route path='/editUser/:id' component={EditUser} />
          <Route path='/view/:id' component={View} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;