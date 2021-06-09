import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import SC from './components/SC';
import { GlobalStyle } from './components/styles/global';

const theme = {
  main: "mediumseagreen"
};

function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <div className="container">
      <Switch>
        <Route path="/" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/sc" exact component={SC}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
