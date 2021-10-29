// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Tours from './components/Tours/Tours';
import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddTrip from './components/AddTrip/AddTrip';
import ManageBooking from './components/ManageBooking/ManageBooking';
import MyBooking from './components/MyBooking/MyBooking';
import Booking from './components/Booking/Booking';
// import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/mybooking">
              <MyBooking></MyBooking>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/managebooking">
              <ManageBooking></ManageBooking>
            </Route>
            <Route path="/addtrip">
              <AddTrip></AddTrip>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
