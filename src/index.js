import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import Main from './pages/Mainindex';



import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/main" component={Main} />

      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))