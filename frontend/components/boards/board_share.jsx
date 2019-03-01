import React from 'react';

class BoardShare extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: ''
    };
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event){
    this.setState({inputVal: event.currentTarget.value});
  }

  componentDidMount(){
    this.props.receiveUsers();
  }

  render(){
    let share;
    let users = this.props.users.map(user => {
      return <li key={user.id}>{user.email}</li>
    })
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

          <div className="title">
            <div></div>
            <div>Share with</div>
            <div></div>
          </div>

          <input 
            type="text" 
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'
          />

          <ul className="board-members">
            {users}
          </ul>
        </div>
    } else {
      share = ""
    }
    return(
    <div className="invite-container">
      <div className="invite" onClick={this.props.displayShareOptions}>
        <i className="fas fa-user"></i>Invite     
      </div>  
      {share}   
    </div>
    )
  }

}

export default BoardShare