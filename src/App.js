import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
      <Switch>
        <Route path="/" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
