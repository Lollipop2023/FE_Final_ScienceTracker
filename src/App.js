//Working version
import './App.css';
import HomePage from './Homepage';
import Login from './Login';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import AddExperimentPage from './AddExperiment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Instructions from './Instructions';
import EditDeleteEx from './Components/EditDeleteEx';

const URL = "https://6621e50c27fcd16fa6c82dbe.mockapi.io/API_experiments/Experiment"

function App() {

  const fetchExperiments = async () => {
    const response = await fetch(URL)
    console.log(response)
  }
  return (
    <div className="App">
        <HomePage />
    </div>
  );
 
}

export default App;