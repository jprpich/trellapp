import React from 'react';
import { Link } from 'react-router-dom';
import ListIndexContainer from '../lists/list_index_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  componentDidUpdate(prevProps){
    if(prevProps.board && (prevProps.board.id != this.props.match.params.boardId)){
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
          <div className="board-show-navbar">      
            <div onClick={this.props.editDropdown} className="board-title">{this.props.board.title}</div>
            <span className="delete-board" onClick={this.deleteBoard.bind(this)}>Delete Board</span>
          </div>
          <ListIndexContainer  />
        </div>
      )
    }
  }
}

export default BoardShow