import React from 'react';
import CommentFormContainer from '../comments/comment_form_container'
import CommentIndexContainer from '../comments/comment_index_container'

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.card
  }

  componentDidMount(){    
    this.props.fetchCard(this.props.card.id);
  }

  deleteCard() {
    this.props.deleteCard(this.props.card.id).then(()=> this.props.closeModal());
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCard(this.state);
    this.setState({
      description: ""
    })
  }

  updateDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  render() {
    let form;
    if (this.props.card && this.props.card.description){
      form = "";
    } else {
      form = 
      <form onSubmit={this.handleSubmit.bind(this)}>
        <textarea
          onChange={this.updateDescription.bind(this)}
          value={this.state.description}
          placeholder="Add a more detailed description..."
        >
        </textarea>
        <button className="create-board-button">Save</button>
      </form>
    }
    if (!this.props.card){
      return null;
    } else {
      return (
        <div className="card-show">
          <div className="header">
            <div className="header-title">
              <h1><i className="fas fa-tablet-alt"></i>{this.props.card.title}</h1>
              <div className="delete-card" onClick={this.deleteCard.bind(this)}>Delete Card</div>
            </div>
            <div className="close-card" onClick={this.props.closeModal}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="description">
            <h1><i className="fas fa-bars"></i>Description</h1>
            <p>{this.props.card.description}</p>
            {form}
          </div>
          <div className="comments">
            <h1 className="add-comment-title"><i className="far fa-comment"></i>Add Comment</h1>
            <CommentFormContainer cardId={this.props.card.id} />
            <h1 className="activity-title"><i className="far fa-comments"></i>Activity</h1>
            <CommentIndexContainer cardId={this.props.card.id} />
          </div>
          
        </div>
      )
    }
  }
}

export default CardShow