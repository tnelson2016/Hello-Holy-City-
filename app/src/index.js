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

// TODO bring in action creator for getbars, etc.

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#808080'
    }
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
// store.dispatch(getRestaurants)
// store.dispatch(getHotels)
// store.dispatch(getCourses)
// store.dispatch(getActivities)
// store.dispatch(getAttractions)
