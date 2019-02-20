import React from 'react';
import CommentItem from './comment_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.receiveComments(this.props.cardId)
  }

  render() {
    const comments = this.props.comments.map(comment =>{
      return <CommentItem key={comment.id} users={this.props.users} comment={comment}/>
    })
   
    return (
      <div className="comment-index">
        {comments}
      </div>
      
    )
  }

}

export default CommentIndex