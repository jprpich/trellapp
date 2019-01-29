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
          <div className="list-title">
            <h2>{this.props.list.title}</h2>
            <button className="delete-list" onClick={this.deleteList.bind(this)}><i className="fas fa-trash-alt"></i></button>
          </div>
          
          
          <CardIndexContainer listId={this.props.list.id}/>
        </div>
      </>
    )
  }
}

export default ListItem