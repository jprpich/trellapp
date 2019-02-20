import React from 'react';


class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="comment-item">
        <h3>{this.props.users[this.props.comment.user_id].email}</h3>
        <span className="comment-body">{this.props.comment.body}</span> 
      </div>
    )
  }

}

export default CommentItem