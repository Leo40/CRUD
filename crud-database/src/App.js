import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Modal } from 'bootstrap';
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import GlobalState from './context/GlobalState';
import Modal from './components/Modal';
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
        </Switch>
      </div>
    </Router>
    </div>
    <Modal />
  </GlobalState>
  )
}

export default App
