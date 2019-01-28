import React from 'react';
import { Link } from 'react-router-dom';

class BoardsDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boards = this.props.boards.map(board => {
      return <li><Link onClick={this.props.closeModal} key={board.id} to={`/boards/${board.id}`}>{board.title}</Link></li>  
    })
    return (
      <div className="boards-dropdown">
        <ul>
          {boards}
        </ul>
      </div>
    )
  }
}

export default BoardsDropdown