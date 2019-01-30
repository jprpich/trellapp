import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteCard() {
    this.props.deleteCard(this.props.card.id);
  }

  render() {
    return (
      <Draggable draggableId={this.props.card.id} index={this.props.index}> 
        {provided => {
          return (
            <div className="card-item"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {this.props.card.title}
              <button className="delete-card" onClick={this.deleteCard.bind(this)}><i className="fas fa-trash-alt"></i></button>
            </div>
          )
        }}
        
      </Draggable>
    )
  }
}

export default CardItem