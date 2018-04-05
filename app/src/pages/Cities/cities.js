import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, List } from 'material-ui/List'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'

const styles = {
  card: {
    maxWidth: '445px',
    maxHeight: '550px'
  },
  media: {
    height: '300px',
    width: '445px'
  },
  content: {
    textDecoration: 'none'
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
            image="http://www.charlestonhomelistings.com/smallMap.gif"
            title="Map"
          />
          <div>
            <center>
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline" component="h2" />
                <Typography component="p">
                  Where part of town do you want to go?
                </Typography>
              </CardContent>
            </center>
          </div>
          <div>
            <CardActions>
              <CardContent>
                <Link to="/Atmosphere" style={{ textDecoration: 'none' }}>
                  <Button className={props.classes.Button}>Downtown</Button>
                  <Button className={props.classes.Button}>
                    Mount Pleasant
                  </Button>
                  <Button className={props.classes.Button}>Sullivan's</Button>
                  <Button className={props.classes.Button}>IOP</Button>
                  <Button className={props.classes.Button}>West Ashley</Button>
                  <Button className={props.classes.Button}>James Island</Button>
                  <Button className={props.classes.Button}>Folly</Button>
                </Link>
              </CardContent>
            </CardActions>
          </div>
        </Card>
      </center>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    categories: state.q
  }
}

const connector = connect(mapStateToProps)

export default withStyles(styles)(SimpleMediaCard)

// const Categories = props => {
//   const { categories } = props
//   return (
//     <div>
//       <h1>What are you in the mood for?</h1> map{props.categories} =>{' '}
//       <button>Hello World!</button>}
//     </div>
//   )
// }
