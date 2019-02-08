import React from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import ListItemContainer from './list_item_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialData;
  }

  componentDidUpdate(prevProps){
    if (this.props.lists && (prevProps.lists.length !== this.props.lists.length) || (prevProps.board.id != this.props.boardId)){
      this.props.receiveLists(this.props.boardId).then(() => this.setState(this.props.initialData));
    } else if (this.props.lists.length === 1 && (this.props.lists[0].cardIds.length !== prevProps.lists[0].cardIds.length)) {
      this.props.receiveLists(this.props.boardId).then(() => this.setState(this.props.initialData));
    }
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if(!destination){
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index 
    ) {
      return;
    }

    const start = this.state.lists[source.droppableId];
    const finish = this.state.lists[destination.droppableId];
    
    if (start === finish){
      const newCardIds = Array.from(start.cardIds);

      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...start,
        cardIds: newCardIds
      };

      const newState = {
        ...this.state,
        lists: {
          ...this.state.lists,
          [newList.id]: newList
        }
      }

      this.props.updateCardOrds({
        id: draggableId,
        ord: destination.index
      })
      
      this.setState(newState)
      return;

    }

    // Moving from one list to another
    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cardIds: startCardIds
    };

    const finishCardIds = Array.from(finish.cardIds);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishCardIds
    };

    const newState = {  
      ...this.state,
      lists: {
        ...this.state.lists,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    
    this.props.updateCard({
      id: draggableId,
      list_id: destination.droppableId
    })
    this.setState(newState)

  }

  render() {
    const lists = Object.values(this.state.lists).map(list => {
      return <ListItemContainer key={list.id} list={list} />
    })

    return (
      <div className="list-outer-index" >
        <div className="list-index">
          <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
            <div className="drag-drop-context">
              {lists}
            </div>
          </DragDropContext>      
          <div className="list-form" onClick={()=> this.props.showListForm(this.props.boardId)}> 
            <p>+ Add another list</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ListIndex)