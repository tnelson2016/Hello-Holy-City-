import React from 'react'
import Icon from 'material-ui/Icon'
import { withStyles } from 'material-ui/styles'
import { GridListTile, GridListTileBar } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Info from 'material-ui-icons/Info'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 1000,
    height: 800
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

const Sailboat = props => {
  const {
    name,
    price,
    rating,
    location,
    url,
    display_phone,
    image_url
  } = props.golfCourse

  return (
    <GridListTile key={image_url} style={{ height: '105%', width: '200%' }}>
      <img src={image_url} />
      <GridListTileBar
        title={name}
        subtitle={url}
        actionIcon={
          <IconButton className={icon}>
            <Info />
          </IconButton>
        }
      />
    </GridListTile>
  )
}

export default withStyles(styles)(Sailboat)
