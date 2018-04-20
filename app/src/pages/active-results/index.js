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
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from '../../Components/Drawer'
import { TOGGLE_DRAWER } from '../../constants'
import ActiveTile from '../../Components/active-tile'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
//import { filterResult } from '../../action-creators'

const ActiveResults = props => {
  const { activities } = props

  return (
    <div>
      <GridList>
        {map(activity => <ActiveTile ActiveTile={activity} />, activities)}
      </GridList>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    activities: state.activities
  }
}

const connector = connect(mapStateToProps)

export default connector(ActiveResults)
