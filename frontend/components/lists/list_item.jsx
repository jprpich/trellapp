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
          <div className="title">
            <div></div>
            <div>List Actions</div>
            <span onClick={this.props.closeListOptions}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          
          <div onClick={() => this.props.deleteList(this.props.list.id)} className="delete">
            Delete This List
          </div>
        </div>
    } else {
      displayOptions = ""
    }

    return (
      <>
      
      <div className="list-item">
        {displayOptions}
        <div className="list-title">
          <h2>{this.props.list.title}</h2>
          
          <button className="delete-list" onClick={() =>this.props.displayListOptions(this.props.list.id)}>
            <i className="fas fa-ellipsis-h"></i>
          </button>
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
      </>
    )
  }
}

export default ListItem