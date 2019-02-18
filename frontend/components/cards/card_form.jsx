import React from 'react';
import { withRouter } from 'react-router-dom';


class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.card;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.hideCardForm();
    this.props.createCard({ title: this.state.title, list_id: this.props.listId, description: ""});
    this.setState({
      title: ""
    })
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }



  render() {
    return (
      <div className="card-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea
            onChange={this.updateTitle.bind(this)}
            value={this.state.title}
            placeholder="Enter a title for this card..."
            autoFocus="autofocus"
          />
          <br/>
          <div className="options">
          <button className="create-board-button">Add Card</button>
            {/* <span>
              <i className="fas fa-times"></i>
            </span> */}
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(CardForm)