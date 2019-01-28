import React from 'react';
import { Link } from 'react-router-dom';

class BoardsDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boards = this.props.boards.map(board => {
      return <Link onClick={this.props.closeModal} key={board.id} to={`/boards/${board.id}`}><div className="dropdown-item">{board.title}</div></Link>
    })
    return (
      <div className="boards-dropdown">
          {boards}
      </div>
    )
  }
}

export default BoardsDropdown