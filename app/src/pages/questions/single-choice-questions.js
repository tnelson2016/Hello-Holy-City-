import React from 'react'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import MenuAppBar from '../../Components/MenuAppBar'
import { connect } from 'react-redux'
import { ListItem, List } from 'material-ui/List'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import { find, pathOr, map, compose } from 'ramda'
import questions from '../../reducers/questions'
import { SINGLE_CHOICE_QUESTION_ANSWERED } from '../../constants'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from '../../Components/Drawer'
import { TOGGLE_DRAWER } from '../../constants'

const styles = {
  question: {
    fontSize: '20px',
    marginTop: '70px'
  },

  button: {
    padding: '10px',
    marginBottom: '10px',
    marginTop: '10px',
    fontSize: '13px'
  },

  appbar: {
    fontSize: '50px'
  }
}

function SingleChoiceQuestion(props) {
  const URLPathQuestionKey = pathOr(
    null,
    ['match', 'params', 'questionkey'],
    props
  )
  // console.log('URLPathQuestionKey', URLPathQuestionKey)
  const URLPathQuestionGroupName = pathOr(
    null,
    ['match', 'params', 'questiongroupname'],
    props
  )
  // console.log('URLPathQuestionGroupName', URLPathQuestionGroupName)
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

  return (
    <div>
      <center>
        <MenuAppBar
          title="Hello-Holy-City"
          className={classes.appbar}
          onClick={props.drawer ? <Drawer /> : null}
          // {...props}
          // showBackArrow={false}
        />
      </center>

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
                    foundQuestion.isEnd || false,
                    foundQuestion.questionKey,
                    foundQuestion.questiongroupname,
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
    questions: state.questions,
    drawers: state.drawers
  }
}

const mapActionsToProps = dispatch => {
  return {
    buttonClick: (
      isEnd,
      currentquestionKey,
      currentgroupname,
      nextquestiongroupname,
      nextquestionKey,
      value,
      history
    ) => e => {
      dispatch({
        type: SINGLE_CHOICE_QUESTION_ANSWERED,
        payload: { currentgroupname, currentquestionKey, value }
      })

      let navToURL = ''
      if (isEnd) {
        navToURL = '/confirm-results'
      } else {
        navToURL = nextquestiongroupname
          ? `/singlechoice/${nextquestiongroupname}/${nextquestionKey}`
          : `/singlechoice/${nextquestionKey}`
      }

      history.push(navToURL)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default Drawer(connector(withStyles(styles)(SingleChoiceQuestion)))
