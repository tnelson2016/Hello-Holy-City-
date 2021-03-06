import React from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ViewList from 'material-ui-icons/ViewList'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import InboxIcon from 'material-ui-icons/Inbox'
import HomeIcon from 'material-ui-icons/Home'
import Divider from 'material-ui/Divider'
import { TOGGLE_DRAWER } from '../constants'
import { Drawer } from 'material-ui'

const linkStyle = {
  textDecoration: 'none',
  color: 'black'
}

const sideList = (
  <div>
    <List>
      <Link to="/" className="router-link" style={linkStyle}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/Login" className="router-link" style={linkStyle}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </Link>
      <Link to="/Featurs" className="router-link" style={linkStyle}>
        <ListItem button>
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Upcoming Features" />
        </ListItem>
      </Link>
      <Link to="/Admin" className="router-link" style={linkStyle}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Admin" />
        </ListItem>
      </Link>
    </List>
    <Divider />
  </div>
)

const withDrawer = function(PageComponent) {
  const WrapDrawerComponent = props => {
    return (
      <div>
        <PageComponent {...props} />
        <Drawer open={props.open} onRequestClose={props.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={props.toggleDrawer}
            onKeyDown={props.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }

  function mapStateToProps(state) {
    return {
      open: state.drawer.open
    }
  }

  function mapActionsToProps(dispatch) {
    return {
      toggleDrawer: () => dispatch({ type: TOGGLE_DRAWER })
    }
  }

  const connector = connect(mapStateToProps, mapActionsToProps)
  return connector(WrapDrawerComponent)
}

export default withDrawer
