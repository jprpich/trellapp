import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId)
  }


  render() {
    if (!this.props.board){
      return null
    } else {
      return (
        <>
          <h1>{this.props.board.title}</h1>
        </>
      )
    }
  }
}

export default BoardShow