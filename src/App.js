import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Memories from '../src/components/Memories';
import Home from '../src/components/Home';
import DetailedMemories from '../src/components/DetailedMemories';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Memories">
            <Memories />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/Memories/:id">
            <DetailedMemories />
          </Route>
          
        </Switch>
    </div>
  );
}

export default App;
