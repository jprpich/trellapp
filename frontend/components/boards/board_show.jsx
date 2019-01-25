import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  deleteBoard(){
    this.props.deleteBoard(this.props.board.id).then(() => this.props.history.push("/boards"));
  }

  render() {
    if (!this.props.board){
      return null;
    } else {
      return (
        <>
          <h1>{this.props.board.title}</h1>
          <button onClick={this.deleteBoard.bind(this)}>Delete Board</button>
        </>
      )
    }
  }
}

export default BoardShow