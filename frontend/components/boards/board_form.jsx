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
          <button className="create-board-button">Create Board</button>
        </form>
      </div>
    )
  }
}

export default BoardForm