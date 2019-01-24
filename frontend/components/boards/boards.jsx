import React from 'react';


class Boards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.receiveBoards();
  }

  render() {
    const boards = this.props.boards.map(board => {
      return <li key={board.id}>{board.title}</li>
    })
    return (
      <>
        <div className="greeting-component">
          <h2>Welcome, {this.props.currentUser.email}!</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>
        <h1>These are your boards</h1>
        <ul>
          {boards}
        </ul>
        <h1>hello world </h1>
      </>
    )
  }
}

export default Boards