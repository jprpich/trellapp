import React from 'react';


class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.receiveComments(this.props.cardId)
  }

  render() {
    const comments = this.props.comments.map(comment =>{
      return <li key={comment.id}><h1>{this.props.users[comment.user_id].email}</h1>{comment.body} </li>
    })

    
    return (
      <ul>
        {comments}
      </ul>
    )
  }

}

export default CommentIndex