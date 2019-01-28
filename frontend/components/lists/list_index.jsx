import React from 'react';
import { withRouter } from 'react-router-dom';


class Lists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.receiveLists(this.props.match.params.boardId);
  }

  render() {
    const lists = this.props.lists.map(list => {
      return <li key={list.id}>{list.title}</li>
    })
    
    return (
      <>
        <ul>
          {lists}
        </ul>
      </>
    )
  }
}

export default withRouter(Lists)