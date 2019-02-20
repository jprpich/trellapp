import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state).then(this.props.closeModal);
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
            <input
              type="text"
              onChange={this.updateTitle.bind(this)}
              value={this.state.title}
              placeholder="Add board title"
              autoFocus="autofocus"
            />
          </div>
          <button className="create-board-button">Create Board</button>
        </form>
      </div>
    )
  }
}

export default BoardForm