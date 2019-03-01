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

  matches() {
    let emails = this.props.users.map(user=> user.email)
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return [];
    }

    emails.forEach(email => {
      const sub = email.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(email);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  componentDidMount(){
    this.props.receiveUsers();
  }

  render(){
    let share;
    const results = this.matches().map((result, i) => {
      return (
        <li key={i}>{result}</li>
      );
    }); 
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