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
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="title">title</label>
          <input
            id="title"
            type="text"
            onChange={this.updateTitle.bind(this)}
            value={this.state.title}
            placeholder="title"
          />
          <button>Rename</button>
        </form>
      </div>
    )
  }
}

export default withRouter(EditBoardForm)