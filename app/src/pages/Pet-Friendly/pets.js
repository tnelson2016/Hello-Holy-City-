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
    maxWidth: '345px',
    maxHeight: '500px'
  },
  media: {
    height: '200px',
    width: '345px'
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
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkirvbh4C2jJIULgxpV5-9IDQRncUX5KO0v1LYjRIEtWBYQAh"
            title="Waterfront Park"
          />
          <div>
            <center>
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline" component="h2" />
                <Typography component="p">
                  Is the venue pet friendly?
                </Typography>
              </CardContent>
            </center>
          </div>
          <div>
            <CardActions>
              <CardContent>
                <Link to="" style={{ textDecoration: 'none' }}>
                  {''}
                  <Button className={props.classes.Button}>
                    Yes, Pets Welcomed!
                  </Button>
                  <Button className={props.classes.Button}>
                    {' '}
                    No Fur Babies allowed
                  </Button>{' '}
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
