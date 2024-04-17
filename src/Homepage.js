import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import {
//     BrowserRouter as Router,
//     Switchwitch,
//     Route,
//     Link,
//     useRouteMatch
// } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Navigation from './Components/Navbar';
import ExperimentCard from './Components/Card';

const HomePage = () => {
    // Sample data for experiment cards until I get my API figured out.
    const experiments = [
        {
            id: 1,
            title: "Mentos Popper",
            category: "Physics",
            level: "Easy",
            details: "Supplies: 1 pack of mentos and 2L bottle diet coke. Directions: Remove the cap from the soda and remove about one ounce. In a large open area, add the pack of mentos quickly to the soda and replace the lid. Shake the soda bottle hard three times with the cap pointed away from any person! Put the bottle down and run away to observe!"
        },
        {
            id: 2,
            title: "Invisible Ink",
            category: "Chemistry",
            level: "Easy",
            details: "Supplies: two lemons, pack of Qtips, paper, and a blow dryer or heat gun. Directions: Cut a lemon in half. You can choose to juice it and dip the Qtip or just rub the Qtip on the lemon until it is moist. Use the Qtip to write your message on the paper. (be quick so you remember where you have written!) Let the paper dry. When you are ready to read the message gently heat the paper with the blow dryer or heat gun and slowly watch your message appear! Remember to record your observations."
        },
        {
            id: 3,
            title: "Celery Stain",
            category: "Biology",
            level: "Easy",
            details: "Supplies: Fresh celery stalk with leaves, food coloring, a cup or vase that a piece of celery can stand up in, water to fill the cup or vase to about half the length of the celery piece. Directions: Place the water in the cup or vase. Add food color of your choice. Cut a piece of celery off the stalk near the base (it should widen slightly at the bottom). Do not remove any leaves. Add the celery to the water like a flower, it should stand up slightly. Place in sunlight if possible. Observe the celery every half hour for a couple hours. Record what you see!"
        }
    ];

    return (
        <div>
           <Navigation />
            <div className="container">
                <div className="alert alert-primary" role="alert">
                    <h4 className="alert-heading">Welcome to Science Tracker!</h4>
                    <p>Explore the fascinating world of science with these exciting at home experiments.</p>
                </div>
                <div className="row">
                    {experiments.map(experiment => (
                        <div key={experiment.id} className="col-md-4">
                           <ExperimentCard experiment={experiment} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
