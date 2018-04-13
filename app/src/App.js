import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/home'
import GolfResults from './pages/golf-results'
import BarResults from './pages/bar-results'
import HotelResults from './pages/hotel-results'
import RestaurantResults from './pages/restaurant-results'
import AttractionResults from './pages/attraction-results'
import ActiveResults from './pages/active-results'
import SingleChoiceQuestion from './pages/questions/single-choice-questions'
import ConfirmResults from './pages/confirm-results'
import { update } from 'react-addons-update'
import Features from './pages/features'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
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
            <Route exact path="/results/golf" component={GolfResults} />
            <Route exact path="/results/bar" component={BarResults} />
            <Route exact path="/results/hotel" component={HotelResults} />
            <Route
              exact
              path="/results/restaurant"
              component={RestaurantResults}
            />
            <Route
              exact
              path="/results/attraction"
              component={AttractionResults}
            />
            <Route exact path="/results/active" component={ActiveResults} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/confirm-results" component={ConfirmResults} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
