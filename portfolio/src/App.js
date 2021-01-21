import './App.css';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <HashRouter basename="/">
      <Header/> 
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Portfolio" component={Portfolio}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/contact.html" component={Contact}/>
      <Footer/>
    </HashRouter>
  );
}

export default App;
