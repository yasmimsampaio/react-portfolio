import './App.css';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/"> 
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Portfolio" component={Portfolio}/>
      <Route exact path="/portfolio.html" component={Portfolio}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/contact.html" component={Portfolio}/>
    </HashRouter>
  );
}

export default App;
