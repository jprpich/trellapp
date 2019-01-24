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
          <i className="fas fa-home"></i>
        </div>

        <div className="logo">
          <Link to="/"><i className="far fa-user"></i></Link>
          <Link to="/"><h1>Trellapp</h1></Link>
        </div>

        <div className="header-user">
          <i className="fas fa-plus"></i>
          <h2>{this.props.currentUser.email}!</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>


        
        
        
      </div>
    )
  }
}

export default Navbar 