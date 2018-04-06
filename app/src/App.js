import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import One from './pages/initialQuestion/firstQuestion'
import Categories from './pages/Categories/index'
import SingleChoiceQuestion from './pages/questions/single-choice-questions'
import Cities from './pages/Cities/cities'
import Atmosphere from './pages/barQuestions/atmosphere'
import Pets from './pages/Pet-Friendly/pets'
import touristsQuestions from './Questions/touristsQuestions'

import { update } from 'react-addons-update'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/1" component={One} />

            <Route exact path="/Categories" component={Categories} />
            <Route
              exact
              path="/singlechoice/:questionkey"
              component={SingleChoiceQuestion}
            />
            <Route
              exact
              path="/singlechoice/:questiongroupname/:questionkey"
              component={SingleChoiceQuestion}
            />
            <Route exact path="/Cities" component={Cities} />
            <Route exact path="/Atmosphere" component={Atmosphere} />
            <Route exact path="/Pets" component={Pets} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
