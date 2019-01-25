import React from 'react';
import Navbar from './navbar';
import BoardFormContainer from './board_form_container';
import { Link } from 'react-router-dom';

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
        <Navbar currentUser={this.props.currentUser} logout={this.props.logout} otherForm={this.props.otherForm}/>


        <div className="boards-main">
          <div className="left">
            <ul>
              <li id="first-board">
                <Link to="/"><i className="fas fa-poll"></i>Boards</Link>
              </li>
              <li>
                <Link to="/"><i className="fas fa-tablet-alt"></i>Home</Link>
              </li>
            </ul>
            
      
          </div>

          <div className="all-boards">
            <div className="section-header">
              <i className="far fa-user"></i>
              <h3>Personal Boards</h3>
            </div>
            <ul>
              {boards}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Boards