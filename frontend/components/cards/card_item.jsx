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
    if (this.props.card) {
      return (
        <Draggable draggableId={this.props.card.id.toString()} index={this.props.index}>
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
    } else {  
      return null
    }
    
  }
}

export default CardItem