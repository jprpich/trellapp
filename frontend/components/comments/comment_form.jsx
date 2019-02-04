import React from 'react';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({body: this.state.body, card_id: this.props.cardId, user_id: this.props.userId})
  }

  updateBody(e){
    this.setState({
      body: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <textarea
              value={this.state.body}
              onChange={this.updateBody.bind(this)}
              placeholder="Write a comment..."
            >
            </textarea>
            <button className="create-board-button">Save</button>
          </form>
      </div>
    )
  }
}

export default CommentForm






            