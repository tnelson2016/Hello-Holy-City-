import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import MenuAppBar from '../../Components/MenuAppBar'
import indigo from 'material-ui/colors/indigo'
import purple from 'material-ui/colors/purple'
import red from 'material-ui/colors/red'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const customTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

const styles = theme => ({
  image: {
    textAlign: 'center',
    marginTop: '35px',
    maxWidth: '300px'
  },
  Greeting: {
    fontSize: '20px',
    paddingTop: 50
  },
  Button: {
    maxWidth: 300,
    backgroundColor: '#99c1b1',
    borderRadius: '5px',
    paddingTop: 15
  },
  centered: {
    margin: 'auto',
    textAlign: 'center',
    width: 300
  }
})

const Home = props => (
  <div style={{ backgroundColor: '#fbf1e3' }}>
    <center>
      <img
        alt="Hello Holy City!"
        className={props.classes.image}
        src="/helloholycity.jpg"
      />
      <div>
        <Link style={{ textDecoration: 'none' }} to="/singlechoice/intro/deal">
          <Button color="white" className={props.classes.Button}>
            Lets Get Started. Click Here!
          </Button>
        </Link>
      </div>
      <h2>
        <Typography
          className={props.classes.Greeting}
          // color="primary"
          variant="display1"
        >
          SMILING FACES, BEAUTIFUL PLACES!
        </Typography>
        <Typography
          className={props.classes.button}
          // color="primary"
          variant="display1"
        />
      </h2>
    </center>
  </div>
)

export default withStyles(styles)(Home)

/*Will use later on*/

// <h3>Whats your deal?</h3>
//
// <Typography color="primary" style={{ padding: '16px' }} variant="display1">
//   SMILING FACES, BEAUTIFUL PLACES!
// </Typography>
