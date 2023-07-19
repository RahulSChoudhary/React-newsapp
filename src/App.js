import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// , { Component }
// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Navbar />
//         <News />
//       </>
//     )
//   }
// }

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><News key="general" pageSize={12} country="in" category="general" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize={12} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={12} country="in" category="technology" /></Route>
          <Route exact path="/science"><News key="science" pageSize={12} country="in" category="science" /></Route>
          <Route exact path="/health"><News key="health" pageSize={12} country="in" category="health" /></Route>
          <Route exact path="/business"><News key="business" pageSize={12} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={12} country="in" category="entertainment" /></Route>
        </Switch>
      </Router>
    </>
  )
}