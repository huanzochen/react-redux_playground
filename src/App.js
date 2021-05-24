import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './features/home/Home'
import CounterHomepage from './features/counter/CounterHomepage'
import './App.css'



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Home></Home>
          <Switch>
            <Route path="/counter" exact component={CounterHomepage} ></Route>
          </Switch>
        </header>
      </div>
    </Router>
  )
}

export default App
