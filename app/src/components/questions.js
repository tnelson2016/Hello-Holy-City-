import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
//import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import { ListItem, List } from 'material-ui/List'
import PropTypes from 'prop-types'

function Question(props) {
  return <h2 className="question">{props.content}</h2>
}

Question.PropTypes = {
  content: React.PropTypes.string.isRequired
}

export default Question

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
