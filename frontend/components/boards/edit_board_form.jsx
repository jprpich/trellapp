import React from 'react';

class EditBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state).then(() => this.props.history.push(`/boards/${this.props.board.id}`));
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

export default EditBoardForm