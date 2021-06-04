import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import GlobalState from './context/GlobalState'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <GlobalState>
      <div style={{ maxWidth: "30rem", margin: "50px 200px" }}>
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/add" component={AddUser} />
          <Route path="/delete" component={DeleteUser} />          
        </Switch>
      </div>
    </Router>
    </div>
  </GlobalState>
  )
}

export default App
