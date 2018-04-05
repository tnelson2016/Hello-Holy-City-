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
  content: {
    fontWeight: 'bold'
  }
}

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="photo"
          title="Waterfront Park"
        />

        <CardContent className={classes.content}>
          <Typography gutterBottom variant="headline" component="h2" />
          <Typography component="p">Whats your deal?</Typography>
        </CardContent>

        <CardActions>
          <div>
            <Button size="small" color="primary">
              Im just Visting!
            </Button>
          </div>

          <div>
            <Button size="small" color="primary">
              Im thinking about a Move!
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)

// const styles = theme => ({
//   Button: {
//     text: 'baskerville'
//   }
// })
//
// const Question = props => {
//   return (
//     <Card>
//       'Whats your deal?'
//       <Button>Im just visiting</Button>
//       <Button>Im thinking about a Move</Button>
//     </Card>
//   )
// }
//
// export default Question

// const Questions = props => {
//   return (
//     <List>
//       <ListItem>
//         <Button>{props.content}</Button>
//       </ListItem>
//       <div>
//         {props.Next ? (
//           <Button onClick={e => props.onSubmit}>'NEXT'</Button>
//         ) : null}
//       </div>
//     </List>
//   )
// }
//
// export default Questions
// Question.propTypes = {
//   content: React.PropTypes.string.isRequired
// }
//
// export default Question
