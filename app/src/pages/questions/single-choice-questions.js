import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, List } from 'material-ui/List'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { find, pathOr } from 'ramda'
import questions from '../../reducers/questions'

const styles = {
  card: {
    maxWidth: '400px',
    maxHeight: '550px'
  },
  media: {
    height: '300px',
    width: '345px'
  },
  content: {
    textDecoration: 'none'
  }
}

function SingleChoiceQuestion(props) {
  const URLPathQuestionKey = pathOr(
    null,
    ['match', 'params', 'questionKey'],
    props
  )
  const URLPathQuestionGroupName = pathOr(
    null,
    ['match', 'params', 'questiongroupname'],
    props
  )
  const { classes, questions, match } = props
  console.log('questions', questions)
  console.log('foundquestion group', foundQuestionGroup)

  console.log('questions', questions)

  const foundQuestion = find(
    question => question.questionKey === URLPathQuestionKey,
    questions
  )
  const foundQuestionGroup = find(qG => qG.name === 'bar', questions)

  return (
    <div>
      <center>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://i.pinimg.com/originals/8e/fb/51/8efb51cdb9ed2b08a7e4fe667d2cd53d.jpg"
            title="Money"
          />
          <div>
            <center>
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="headline" component="h2" />
                <Typography component="p">
                  How much are you willing to spend?
                </Typography>
              </CardContent>
            </center>
          </div>
          <div>
            <CardActions>
              <CardContent>
                <Link to="/Cities" style={{ textDecoration: 'none' }}>
                  <Button className={props.classes.Button}>$</Button>
                  <Button className={props.classes.Button}>$$</Button>
                  <Button className={props.classes.Button}>$$$</Button>
                  <Button className={props.classes.Button}>$$$$</Button>
                </Link>
              </CardContent>
            </CardActions>
          </div>
        </Card>
      </center>
    </div>
  )
}

SingleChoiceQuestion.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log('STATE', state)
  return {
    questions: state.questions
  }
}

const connector = connect(mapStateToProps)

export default withStyles(styles)(connector(SingleChoiceQuestion))

// const Categories = props => {
//   const { categories } = props
//   return (
//     <div>
//       <h1>What are you in the mood for?</h1> map{props.categories} =>{' '}
//       <button>Hello World!</button>}
//     </div>
//   )
// }
