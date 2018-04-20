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
    backgroundColor: theme.palette.background.paper,
    width: '500px'
  },
  gridList: {
    width: 1000,
    height: 800
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

const BarTile = props => {
  const {
    name,
    price,
    rating,
    location,
    url,
    display_phone,
    image_url
  } = props.BarTile

  return (
    <GridListTile key={image_url} className={props.classes.root}>
      <div>
        <img
          style={{ maxWidth: '500px', maxHeight: '400px' }}
          src={image_url}
        />
      </div>
      <GridListTileBar
        title={name}
        subtitle={url}
        actionIcon={
          <IconButton className={props.classes.icon}>
            <Info />
          </IconButton>
        }
      />
    </GridListTile>
  )
}
// style={{ height: '105%', width: '200%' }}

export default withStyles(styles)(BarTile)
