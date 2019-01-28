import React from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from './list_item';

class Lists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.receiveLists(this.props.match.params.boardId);
  }

  componentDidUpdate(prevProps){
    if(prevProps.board.id != this.props.match.params.boardId){
      this.props.receiveLists(this.props.match.params.boardId);
    }
  }

  render() {
    const lists = this.props.lists.map(list => {
      return <ListItem key={list.id} list={list} deleteList={this.props.deleteList} />
    })
    
    return (
      <>
        <div className="list-index">
          {lists}
        </div>
      </>
    )
  }
}

export default withRouter(Lists)