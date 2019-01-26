import React from 'react';
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.board.id != this.props.match.params.boardId) {
      this.props.fetchBoard(this.props.match.params.boardId);
    }
  }

  deleteBoard(){
    this.props.deleteBoard(this.props.board.id).then(() => this.props.history.push("/boards"));
  }

  render() {
    if (!this.props.board){
      return null;
    } else {
      return (
        <div className="board-show">
          <Link to={`/boards/${this.props.board.id}/edit`}>
            <div className="board-title">{this.props.board.title}</div>
          </Link>

          
          <button onClick={this.deleteBoard.bind(this)}>Delete Board</button>
        </div>
      )
    }
  }
}

export default BoardShow