import React from 'react';
import CardIndexContainer from '../cards/card_index_container';
import { Droppable } from 'react-beautiful-dnd';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayOptions;
    if(this.props.display.displayListOptions && this.props.list.id === this.props.display.listId){
      displayOptions = 
        <div className="list-options-dropdown">
          <div className="">List Actions</div>
          <span onClick={this.props.closeListOptions}>
            <i className="fas fa-times"></i>
          </span>
          <button>Delete This List</button>
        </div>
    } else {
      displayOptions = 
      <button className="delete-list" onClick={() =>this.props.displayListOptions(this.props.list.id)}>
        <i className="fas fa-ellipsis-h"></i>
      </button>
    }

    return (
      <div className="list-item">
        <div className="list-title">
          <h2>{this.props.list.title}</h2>
          {displayOptions}
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
        
      </div>
    )
  }
}

export default ListItem