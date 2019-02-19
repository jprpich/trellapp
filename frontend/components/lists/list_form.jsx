import React from 'react';
import { withRouter } from 'react-router-dom';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createList({title: this.state.title, board_id: this.props.boardId}).then(this.props.closeModal);
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
      <div className="list-form-dropwdown">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            onChange={this.updateTitle.bind(this)}
            value={this.state.title}
            placeholder="Enter list title..."
            autoFocus="autofocus"
          />
          <br/>
          <div className="options">
            <button className="create-board-button">Add List</button>
            <span onClick={this.props.closeListForm}>
              <i className="fas fa-times"></i>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ListForm)