import React from 'react';
import ListIndexContainer from '../lists/list_index_container';

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
    let share;
    if (this.props.display.displayShareOptions){
      share = 
        <div className="share-board-dropdown">
          <div className="title">
            <div></div>
            <div>Board Members</div>   
            <span onClick={this.props.closeShareOptions}>
              <i className="fas fa-times"></i>
            </span>
          </div> 
          
          <div className="board-members">
            <div>{this.props.users[this.props.userId].email}</div>
          </div>
        </div>
    } else {
      share = ""
    }

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
              <div className="invite-container">
                <div className="invite" onClick={this.props.displayShareOptions}>
                  <i className="fas fa-user"></i>Invite     
                </div>  
                {share}   
              </div>
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