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
          <button><i className="fas fa-home"></i></button>   
        </div>

        <div className="logo">
          <Link to="/"><i className="far fa-user"></i></Link>
          <Link to="/"><h1>Trellapp</h1></Link>
        </div>

        <div className="header-user">
          {this.props.otherForm}
          <button><i className="fas fa-plus"></i></button>
          <button>{this.props.currentUser.email}</button>
          <button onClick={this.props.logout}>Logout</button>
        </div>

      </div>
    )
  }
}

export default Navbar 