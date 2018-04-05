import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
//import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, List } from 'material-ui/List'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'

const styles = {
  card: {
    maxWidth: '345px',
    maxHeight: '500px'
  },
  media: {
    height: '200px',
    width: '345px'
  },
  btnGroupButton: {
    backgroundColor: '#4CAF50' /* Green background */,
    border: '1px solid green' /* Green border */,
    color: 'white' /* White text */,
    padding: '10px 24px' /* Some padding */,
    cursor: 'pointer' /* Pointer/hand icon */,
    width: '50%' /* Set a width if needed */,
    display: 'block' /* Make the buttons appear below each other */
  }
}

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div>
      <center>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="waterfront-park-charleston-parks-conservancy-at-south-carolina.jpg"
            title="Waterfront Park"
          />

          <div>
            <center>
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline" component="h2" />
                <Typography component="p">Whats your deal?</Typography>
              </CardContent>
            </center>
          </div>
          <CardActions>
            <CardContent>
              <Link to="/Categories" style={{ textDecoration: 'none' }}>
                <Button className={props.classes.Button}>
                  Im just Visting!{' '}
                </Button>
              </Link>
            </CardContent>

            <CardContent>
              <Button className={props.classes.Button}>
                Im thinking about a Move!
              </Button>
            </CardContent>
          </CardActions>
        </Card>
      </center>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
