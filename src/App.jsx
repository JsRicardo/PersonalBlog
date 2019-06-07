import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './view/home/Home'
import About from './view/about/About'
import Life from './view/life/Life'
import Message from './view/message/Message'
import Study from './view/study/Study'
import Err from './view/Err'
import Nav from './component/Nav/Nav'

import './app.css'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <div className='header'>
              <Nav></Nav>
            </div>
            <div className="content">
              <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/life' exact component={Life}></Route>
                <Route path='/message' exact component={Message}></Route>
                <Route path='/study' exact component={Study}></Route>
                <Route path='/err' component={Err}></Route>
                <Redirect to='/err'></Redirect>
              </Switch>
            </div>
            <div className="page__bottom">
            ©Copyright Powered By Ricardo -- Ricardo 的个人博客 
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App