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
import LazyLoad from './features/lazyLoad/LazyLoad'
import Hoc from './features/hoc/Hoc'
import Context from './features/context/ContextExample'
import ContextHK from './features/contextHook'
import MultiContext from './features/multiContext/MultiContext'
import ReducerCounter from './features/reducerCounter'
import ApolloPlayground from './features/apolloPlayground'
import AddOnList from './features/addOnList'
import XState from './features/xState'
import Ellipsis from './features/ellipsis'
import Effects from './features/effects'
import CanvasInReact from './features/canvasInReact'
import CanvasInReactHook from './features/canvasInReactHook'
import IUseRef from './features/iUseRef'

import ItemPagePC from './checkoutShop/item/pc'

import './App.css'

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
            <InfiniteScroll />
          </Route>
          <Route path="/github" exact component={GitHub}></Route>
          <Route path="/eventtargetvalue" exact component={EventTargetValue}></Route>
          <Route path="/counter" exact component={CounterHomepage}></Route>
          <Route path="/mycounter" exact component={MyCounter}></Route>
          {/* <Wrapper> */}
          <Route path="/lazyload" exact component={LazyLoad}></Route>
          <Route path="/hoc" exact component={Hoc}></Route>
          <Route path="/context" exact component={Context}></Route>
          <Route path="/contexthk" exact component={ContextHK}></Route>
          <Route path="/multicontext" exact component={MultiContext}></Route>
          <Route path="/reducercounter" exact component={ReducerCounter}></Route>
          <Route path="/itempage">
            <ItemPagePC />
          </Route>
          <Route path="/apollo_playground">
            <ApolloPlayground></ApolloPlayground>
          </Route>
          <Route path="/add-on-list">
            <AddOnList />
          </Route>
          <Route path="/xstate">
            <XState />
          </Route>
          <Route path="/ellipsis">
            <Ellipsis />
          </Route>
          <Route path="/effects">
            <Effects />
          </Route>
          <Route path="/canvasInReact">
            <CanvasInReact />
          </Route>
          <Route path="/canvasInReact-hook">
            <CanvasInReactHook />
          </Route>
          <Route path="/i_useref">
            <IUseRef />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
