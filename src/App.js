import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Homepage/Home';
import Nav from './Components/Nav/Nav';
import About from './Pages/AboutUs/About';

function App() {
  return (
      <BrowserRouter>
      <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
