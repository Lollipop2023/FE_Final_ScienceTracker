import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './card.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';


function Card({ experiment }) {
  let categoryClass = '';
  
  switch (experiment.category) {
    case 'Physics':
      categoryClass = 'bg-physics';
      break;
    case 'Chemistry':
      categoryClass = 'bg-chemistry';
      break;
    case 'Biology':
      categoryClass = 'bg-biology';
      break;
    default:
      categoryClass = 'bg-null'; 
    
  }

 return (
    <div className={`card text-center ${categoryClass}`}>
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link active" href="./Instructions">Instructions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Components/EditDeleteEx.js">Edit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#./">Save</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">{experiment.title}</h5>
        <p className="card-text">{experiment.details}</p>
        <a href="#" className="btn btn-light">Start</a>
      </div>
    </div>
  );

    <Router>
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
        </Switch>
    </Router>

}

export default Card;

