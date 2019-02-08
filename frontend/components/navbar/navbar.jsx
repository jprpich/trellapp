import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="header-board-buttons">
          <Link to="/"><i className="fas fa-home"></i></Link>  
          {this.props.boardsDropdown}
        </div>

        <div className="logo">
          <Link to="/"><i className="far fa-user"></i></Link>
          <Link to="/"><h1>Trellapp</h1></Link>
        </div>

        <div className="header-user">
          {this.props.otherForm}
          {this.props.profileDropdown}
        </div>

      </div>
    )
  }
}

export default Navbar 