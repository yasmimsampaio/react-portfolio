import './App.css';
import Home from './Components/Home';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/"> 
      <Route exact path="/" component={Home}/>
    </HashRouter>
  );
}

export default App;
