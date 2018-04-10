import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  image: {
    position: 'relative',
    width: '100%',
    paddingTop: '0',
    padding: '100',
    opacity: '.4',
    minHeight: '210%',
    minWidth: '1024px'
  },
  Greeting: {
    position: 'absolute',
    top: '50px',
    left: '0',
    width: '100%',
    color: 'black',
    fontFamily: 'Baskerville'
  },
  Button: {
    position: 'absolute',
    paddingTop: '10px',
    align: 'center',
    fontFamily: 'Baskerville',
    fontSize: '40%',
    fontWeight: '550'
  },
  logo: {
    fontFamily: 'Baskerville',
    fontSize: '50%',
    paddingTop: '3%'
  },
  button: {
    position: 'static',
    paddingTop: '90px',
    marginRight: '22%',
    color: 'black'
  }
})

const Home = props => (
  <div>
    <center>
      <img
        alt="Hello Holy City!"
        className={props.classes.image}
        src="/bridge-charleston-south-carolina-skyline-CHARLESTON0717.jpg"
      />
      <h2>
        <Typography
          className={props.classes.Greeting}
          color="primary"
          variant="display1"
        >
          HELLO HOLY CITY!
          <Typography
            className={props.classes.logo}
            color="primary"
            variant="display1"
          >
            SMILING FACES, BEAUTIFUL PLACES!
          </Typography>
          <Typography
            className={props.classes.button}
            color="primary"
            variant="display1"
          >
            <Link to="/singlechoice/deal">
              {' '}
              <Button className={props.classes.Button}>
                Lets Get Started. Click Here!
              </Button>
            </Link>
          </Typography>
        </Typography>
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
