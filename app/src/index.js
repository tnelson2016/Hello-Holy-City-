import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Provider } from 'react-redux'
import store from './store'
import { GET_QUESTIONS } from './constants'
import { getBars } from './action-creators/index'
import { getActivities } from './action-creators/index'
import { getCourses } from './action-creators/index'
import { getAttractions } from './action-creators/index'
import { getHotels } from './action-creators/index'
import { getRestaurants } from './action-creators/index'
import indigo from 'material-ui/colors/indigo'
import purple from 'material-ui/colors/purple'
import red from 'material-ui/colors/red'
import blue from 'material-ui/colors/blue'
import blueGrey from 'material-ui/colors/blueGrey'

const customTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: purple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={customTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()

store.dispatch(getBars)
store.dispatch(getRestaurants)
store.dispatch(getHotels)
store.dispatch(getCourses)
store.dispatch(getActivities)
store.dispatch(getAttractions)
