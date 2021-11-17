import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>

      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/login" component={Login}/>
          <Route path="*" component={Error404}/> 
        </Switch>
      </div>
    </BrowserRouter>
  )

}

export default App;
