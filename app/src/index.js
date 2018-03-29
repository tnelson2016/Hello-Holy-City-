import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

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
    <App />,
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
