import React from 'react';


class BoardsDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lis = this.props.boards.map(board => {
      return <li key={board.id}>{board.title}</li>
    })
    return (
      <div>
        <p>hello world</p>
        <ul>
          {lis}
        </ul>
      </div>
    )
  }
}

export default BoardsDropdown