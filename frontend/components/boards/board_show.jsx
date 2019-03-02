import React from 'react';
import ListIndexContainer from '../lists/list_index_container';
import BoardShareContainer from './board_share_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
    this.props.receiveBoards();
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
            <div className="left-side">
              <div onClick={() => this.props.editDropdown(this.props.board.id)} className="board-title">
                {this.props.board.title}
              </div>
              <BoardShareContainer boardId={this.props.board.id} />
            </div>
            <span className="delete-board" onClick={this.deleteBoard.bind(this)}>Delete Board</span>
          </div>
          <ListIndexContainer boardId={this.props.board.id} />
        </div>
      )
    }
  }
}

export default BoardShow