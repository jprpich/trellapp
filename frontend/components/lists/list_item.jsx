import React from 'react';
import CardIndexContainer from '../cards/card_index_container';
import { Droppable } from 'react-beautiful-dnd';
import CardFormContainer from '../cards/card_form_container';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteList() {
    this.props.deleteList(this.props.list.id);
  }

  render() {
    return (
      <div className="list-item">
        <div className="list-title">
          <h2>{this.props.list.title}</h2>
          <button className="delete-list" onClick={this.deleteList.bind(this)}><i className="fas fa-trash-alt"></i></button>
        </div>
        <Droppable droppableId={this.props.list.id.toString()}>
          {provided => {
            return (
              <div ref={provided.innerRef}  {...provided.droppableProps} >
                <CardIndexContainer list={this.props.list} />
                {provided.placeholder}
              </div>    
            )
          }}
          
        </Droppable>
        <CardFormContainer listId={this.props.list.id}/>
      </div>
    )
  }
}

export default ListItem