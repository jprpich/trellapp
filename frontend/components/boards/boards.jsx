import React from 'react';
import Navbar from './navbar';
import BoardFormContainer from './board_form_container';

class Boards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.receiveBoards();
  }

  render() {
    const boards = this.props.boards.map(board => {
      return <li className="board-box" key={board.id}>{board.title}</li>
    })
    return (
      <>
        <Navbar currentUser={this.props.currentUser} logout={this.props.logout}/>
        <div className="boards-main">
          <i className="far fa-user"></i>
          <h2>Boards</h2> 
          <ul>
            {boards}
          </ul>
        </div>
        <BoardFormContainer />
        
        
      </>
    )
  }
}

export default Boards