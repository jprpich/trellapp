import React from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import ListItem from './list_item';
import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialData;
  }

  componentDidMount(){
    this.props.receiveLists(this.props.match.params.boardId).then(() => this.setState(this.props.initialData));
  }

  componentDidUpdate(prevProps){
    if (this.props.lists && (prevProps.lists.length !== this.props.lists.length)){
      this.props.receiveLists(this.props.match.params.boardId).then(() => this.setState(this.props.initialData));
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

    const list = this.state.lists[source.droppableId];
    const newCardIds = Array.from(list.cardIds);


    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);


    const newList = {
      ...list,
      cardIds: newCardIds
    };

    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        [newList.id]: newList
      }
    }
    this.setState(newState)


  }

  render() {
    const lists = Object.values(this.state.lists).map(list => {
      return <ListItem key={list.id} list={list} deleteList={this.props.deleteList} />
    })

    
    return (
      <div className="list-index">
        <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
          <div className="drag-drop-context">
            {lists}
          </div>
        </DragDropContext>
        
        
        <ListFormContainer />
      </div>
    )
  }
}

export default withRouter(ListIndex)