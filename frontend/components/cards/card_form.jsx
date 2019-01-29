import React from 'react';
import { withRouter } from 'react-router-dom';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.card;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCard({ title: this.state.title, list_id: this.props.listId});
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
      <>
        <div className="card-form">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              onChange={this.updateTitle.bind(this)}
              value={this.state.title}
              placeholder="+ Add another card"
              autoFocus="autofocus"
            />
          </form>
        </div>
      </>
    )
  }
}

export default withRouter(CardForm)