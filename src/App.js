import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './features/home/Home'
import CounterHomepage from './features/counter/CounterHomepage'
import MyCounter from './features/mycounter/MyCounter'
import GitHub from './features/github/GitHub'
import InfiniteScroll from './features/infinitescroll/InfiniteScroll'
import './App.css'



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Home></Home>
          <Switch>
            <Route path="/ifinitescroll">
              <InfiniteScroll/>
            </Route>
            <Route path="/github" exact component={GitHub} ></Route>
            <Route path="/counter" exact component={CounterHomepage} ></Route>
            <Route path="/mycounter" exact component={MyCounter} ></Route>
          </Switch>
        </header>
      </div>
    </Router>
  )
}

export default App
