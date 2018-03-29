import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Question from './components/questions'
import One from './pages/initialQuestion/firstQuestion'
import touristQuestions from './Questions/touristQuestions'
import { update } from 'react-addons-update'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/1" component={One} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
