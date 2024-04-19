import Container from 'react-bootstrap/Container';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch
// } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Navigation from './Components/NavigationBar';
import Card from './Components/Card';
import React, { useState, useEffect } from 'react';


function Homepage() {
  const [experiments, setExperiments] = useState([]);

  useEffect(() => {
    fetch('https://6621e50c27fcd16fa6c82dbe.mockapi.io/API_experiments/Experiment')
      .then(response => response.json())
      .then(data => setExperiments(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

 return (
    <div>
        <Navigation />
        <div className="container">
                <div className="alert alert-primary" role="alert">
                    <h4 className="alert-heading">Welcome to Science Tracker!</h4>
                    <p>Explore the fascinating world of science with these exciting at home experiments.</p>
                </div>      
        </div> 
        <div className="container">
                <div className="row">
                    {experiments.map((experiment, index) => (
                        <Card key={index} experiment={experiment} />
                    ))}
                </div>
        </div>
    </div>   
  );
}

export default Homepage;
