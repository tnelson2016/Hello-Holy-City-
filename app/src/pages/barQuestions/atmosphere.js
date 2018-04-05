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
    maxWidth: '400px',
    maxHeight: '550px'
  },
  media: {
    height: '300px',
    width: '400px'
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
            image="https://i.pinimg.com/originals/fa/c5/35/fac535fef1c181d2c30577af605c30c1.jpg"
            title="Ambience"
          />
          <div>
            <center>
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline" component="h2" />
                <Typography component="p">
                  What is your ambience preference? (Select up to 2 choices)
                </Typography>
              </CardContent>
            </center>
          </div>
          <div>
            <CardActions>
              <CardContent>
                <Link to="/Pets" style={{ textDecoration: 'none' }}>
                  {' '}
                  <Button className={props.classes.Button}>
                    On the Water
                  </Button>{' '}
                  <Button className={props.classes.Button}>Downtown</Button>
                  <Button className={props.classes.Button}>Chill</Button>
                  <Button className={props.classes.Button}>Pub</Button>
                  <Button className={props.classes.Button}>Breweries</Button>
                  <Button className={props.classes.Button}>Dive Bar</Button>
                  <Button className={props.classes.Button}>
                    Boutique Cocktails
                  </Button>
                  <Button className={props.classes.Button}>Courtyard</Button>
                  <Button className={props.classes.Button}>Rooftop</Button>
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
