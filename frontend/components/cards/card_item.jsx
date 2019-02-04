import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    if (this.props.card) {
      return (
        <Draggable draggableId={this.props.card.id.toString()} index={this.props.index}>
          {provided => {
            return (
              <div className="card-item"
                onClick={()=> this.props.showCard(this.props.card.id)}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                {this.props.card.title}

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