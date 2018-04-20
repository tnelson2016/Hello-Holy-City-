import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/home'
import CourseResults from './pages/course-results'
import BarResults from './pages/bar-results'
import HotelResults from './pages/hotel-results'
import RestaurantResults from './pages/restaurant-results'
import AttractionResults from './pages/attraction-results'
import ActiveResults from './pages/active-results'
import SingleChoiceQuestion from './pages/questions/single-choice-questions'
import ConfirmResults from './pages/confirm-results'
import { update } from 'react-addons-update'
import Features from './pages/features'
import NoResultsFound from './pages/no-results-found'

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
            <Route exact path="/results/courses" component={CourseResults} />
            <Route exact path="/results/bars" component={BarResults} />
            <Route exact path="/results/hotels" component={HotelResults} />
            <Route
              exact
              path="/results/restaurants"
              component={RestaurantResults}
            />
            <Route
              exact
              path="/results/attractions"
              component={AttractionResults}
            />
            <Route exact path="/results/activities" component={ActiveResults} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/confirm-results" component={ConfirmResults} />
            <Route exact path="/no-results-found" component={NoResultsFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
