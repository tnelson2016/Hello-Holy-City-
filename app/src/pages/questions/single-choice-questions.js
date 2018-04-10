import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, List } from 'material-ui/List'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { find, pathOr, map, compose } from 'ramda'
import questions from '../../reducers/questions'
import { SINGLE_CHOICE_QUESTION_ANSWERED } from '../../constants'
import MenuAppBar from '../../Components/MenuAppBar'

const styles = {
  question: {
    fontSize: '30px'
  },

  button: {
    padding: '10px',
    marginBottom: '10px',
    marginTop: '10px'
  }
}

function SingleChoiceQuestion(props) {
  const URLPathQuestionKey = pathOr(
    null,
    ['match', 'params', 'questionkey'],
    props
  )
  console.log('URLPathQuestionKey', URLPathQuestionKey)
  const URLPathQuestionGroupName = pathOr(
    null,
    ['match', 'params', 'questiongroupname'],
    props
  )
  console.log('URLPathQuestionGroupName', URLPathQuestionGroupName)
  const { classes, questions, match } = props

  const foundQuestion = URLPathQuestionGroupName
    ? find(
        q =>
          q.questionKey === URLPathQuestionKey &&
          q.questiongroupname === URLPathQuestionGroupName,
        questions
      )
    : find(q => q.questionKey === URLPathQuestionKey, questions)

  //const foundQuestionGroup = find(qG => qG.name === 'bar', questions)
  console.log('foundQuestion', foundQuestion)
  return (
    <div>
      <center>
        <div>
          <center>
            <Typography
              gutterBottom
              variant="headline"
              className={classes.question}
            >
              {foundQuestion.question}
            </Typography>
          </center>
        </div>

        <div>
          {map(
            option => (
              <div>
                <Button
                  variant="raised"
                  className={classes.button}
                  value={option.value}
                  key={option.value}
                  onClick={props.buttonClick(
                    option.next.questiongroupname,
                    option.next.questionKey,
                    option.value,
                    props.history
                  )}
                >
                  {option.optionText}
                </Button>
              </div>
            ),
            foundQuestion.options
          )}
        </div>
      </center>
    </div>
  )
}

SingleChoiceQuestion.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}

const mapActionsToProps = dispatch => {
  return {
    buttonClick: (questiongroupname, questionkey, value, history) => e => {
      dispatch({
        type: SINGLE_CHOICE_QUESTION_ANSWERED,
        payload: { questiongroupname, questionkey, value }
      })

      const navToURL = questiongroupname
        ? `/singlechoice/${questiongroupname}/${questionkey}`
        : `/singlechoice/${questionkey}`
      history.push(navToURL)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(SingleChoiceQuestion))
