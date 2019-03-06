import React from 'react';

class BoardShare extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: ''
    };
    this.handleInput = this.handleInput.bind(this)
    this.selectUser = this.selectUser.bind(this);
  }

  handleInput(event){
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return [];
    }

    this.props.users.forEach(user => {
      const sub = user.email.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(user);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectUser(event) {
    this.props.shareBoard({user_id: event.target.id, board_id: this.props.board.id});
    this.setState({inputVal: ""});
  }

  componentDidMount(){
    this.props.receiveUsers();
  }

  render(){
    let share;
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} id={result.id} onClick={this.selectUser}>{result.email}</li>
      );
    }); 
    if (this.props.display.displayShareOptions){
      let emails 
      if (this.props.board.userIds) {
        emails = this.props.board.userIds.map(id => {
          return <li key={id}>{this.props.users.find(x => x.id === id).email}</li>
        })
      } else {
        emails = ""
      }
      share = 
        <div className="share-board-dropdown">
          <div className="title">
            <div></div>
            <div>Board Members</div> 
            <span onClick={this.props.closeShareOptions}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <ul className="emails">
            {emails}
          </ul>  

          <div className="share-with">
            <div className="share-title">Share with</div>
            <input 
              type="text" 
              onChange={this.handleInput}
              value={this.state.inputVal}
              placeholder='email...'
            />
          </div>

          <ul className="board-members">
            {results}
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