import React from 'react';
import CardIndexContainer from '../cards/card_index_container';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteList() {
    this.props.deleteList(this.props.list.id);
  }

  render() {
    return (
      <>
        <div className="list-item">
          {this.props.list.title}
          <button className="delete-list" onClick={this.deleteList.bind(this)}><i className="fas fa-trash-alt"></i></button>
          <CardIndexContainer listId={this.props.list.id}/>
        </div>
      </>
    )
  }
}

export default ListItem