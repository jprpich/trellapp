import React from 'react';


class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(){
    this.props.logout().then(this.props.closeModal);
  }

  render() {
    return (
      <div className="profile-dropdown">
        <div className="profile-email">{this.props.currentUser ? this.props.currentUser.email : ""}</div>
        <button onClick={this.handleSubmit.bind(this)}>Logout</button>
      </div>
    )
  }
}

export default ProfileDropdown