import React from 'react';
import { withRouter } from 'react-router-dom';

class EditBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state).then(this.props.closeModal);
  }

  updateTitle(e){
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="board-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-title">
            <input autoFocus={true}
              type="text"
              onChange={this.updateTitle.bind(this)}
              value={this.state.title}
              placeholder="title"
            />
          </div>
          <button className="create-board-button">Rename</button>
        </form>
      </div>
    )
  }
}

export default withRouter(EditBoardForm)