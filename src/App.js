import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './features/home/Home'
import CounterHomepage from './features/counter/CounterHomepage'
import MyCounter from './features/mycounter/MyCounter'
import GitHub from './features/github/GitHub'
import EventTargetValue from './features/eventtargetvalue/EventTargetValue'
import InfiniteScroll from './features/infinitescroll/Main'
import MouseEvents from './features/mouseEvents/MouseEvents'
import Cookie from './features/cookie/Cookie'
import LazyLoad from './features/LazyLoad/LazyLoad'
import Hoc from './features/Hoc/Hoc'

import './App.css'

import styled from 'styled-components'


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Home></Home>
        </header>
        <Switch>
          <Route path="/cookie" exact component={Cookie}></Route>
          <Route path="/mouseevents" exact component={MouseEvents}></Route>
          <Route path="/infinitescroll">
            <InfiniteScroll/>
          </Route>
          <Route path="/github" exact component={GitHub} ></Route>
          <Route path="/eventtargetvalue" exact component={EventTargetValue} ></Route>
          <Route path="/counter" exact component={CounterHomepage} ></Route>
          <Route path="/mycounter" exact component={MyCounter} ></Route>
          {/* <Wrapper> */}
          <Route path="/lazyload" exact component={LazyLoad}></Route>
          <Route path="/hoc" exact component={Hoc}></Route>
          {/* </Wrapper> */}
        </Switch>

      </div>
    </Router>
  )
}

export default App
