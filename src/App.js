import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Tours from './components/Tours/Tours';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
// import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route>
        <Header></Header>
      </Route>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/tours">
              <Tours></Tours>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Route>
          {/* <Footer></Footer> */}
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
