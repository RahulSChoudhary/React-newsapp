import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
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
//         <News <News setProgress={progress} apiKey={apiKey}   />
//       </>
//     )
//   }
// }

export default function App() {

  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  console.log(apiKey);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={12} country="in" category="general" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={12} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={12} country="in" category="technology" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={12} country="in" category="science" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={12} country="in" category="health" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={12} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={12} country="in" category="entertainment" /></Route>
        </Switch>
      </Router>
    </>
  )
}