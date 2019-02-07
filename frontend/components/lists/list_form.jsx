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
      <>
        <div className="board-form"> 
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-title">
                <input
                  type="text"
                  onChange={this.updateTitle.bind(this)}
                  value={this.state.title}
                  placeholder="Enter list title..."
                  autoFocus="autofocus"
                />
                <br/>
                <button className="create-board-button">Add List</button>
              </div>
          </form>
          
        </div>
      </>
    )
  }
}

export default withRouter(ListForm)