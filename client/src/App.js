import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navigation from "./components/Navigation/index"
// import Homepage from "./pages/Homepage/index"

import Homepage from "./pages/Homepage/index"
import About from "./pages/About/index"
import Services from "./pages/Services/index"
import Ppc from "./pages/Services/ppc/index"
import Fullservicedesign from "./pages/Services/fullservicedesign/index"
import Logodesignbranding from "./pages/Services/logodesignbranding/index"
// import BlogPost from "./pages/BlogPost/index.js"
// import Footer from "./components/Footer/index.js"
// import Portfolio from "./components/Portfolio/index"
// import Pricing from "./components/Pricing/index"
// import About from "./components/About/index"
// import Contact from "./components/Contact/index"
import createHistory from 'history/createBrowserHistory';


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
         <Navigation/>
         <Router history = {history}>
           <Switch>
             <Route path="/full-service-design" component={Fullservicedesign}/>
             <Route path="/logo-design-branding" component={Logodesignbranding}/>
             <Route path="/ppc" component={Ppc}/>
             <Route path="/services" component={Services}/>
             <Route path="/about" component={About}/>
             <Route path="/" component={Homepage}/>
             {/* <Route path="/" component={Homepage}/> */}
           </Switch>
         </Router>
       {/* <Footer></Footer> */}
         
    </div>
  
  );
}

export default App;
