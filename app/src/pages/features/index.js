import React from 'react'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import MenuAppBar from '../../Components/MenuAppBar'
import { filterResult } from '../../action-creators'
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
    marginTop: '70px',
    paddinTop: 70
  },

  button: {
    padding: '10px',
    marginBottom: '10px',
    marginTop: '10px',
    fontSize: '13px'
  },

  Greeting: {
    paddingTop: 70,
    fontSize: '30px'
  }
}

const ConfirmResult = props => (
  <div>
    <center>
      <MenuAppBar
        title="Hello-Holy-City"
        onClick={props.drawer ? <Drawer /> : null}
        // {...props}
        // showBackArrow={false}
      />
    </center>

    <center>
      <h2>
        <Typography
          className={props.classes.Greeting}
          // color="primary"
          variant="display1"
        >
          Features coming soon:
        </Typography>
        <Typography
          className={props.classes.button}
          // color="primary"
          variant="display1"
        />
      </h2>
      <div />
    </center>
  </div>
)

function mapStateToProps(state) {
  return {
    questions: state.questions,
    drawers: state.drawers
  }
}

const mapActionsToProps = dispatch => {
  return {
    onClick: (questions, history) => e => {
      console.log('CLICK')
      dispatch(filterResult(questions, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default Drawer(connector(withStyles(styles)(ConfirmResult)))
