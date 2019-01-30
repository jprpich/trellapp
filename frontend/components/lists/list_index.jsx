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

  onDragEnd(result) {
    // reorder our column
  }

  render() {
    
    const lists = this.props.lists.map(list => {
      return <ListItem key={list.id} list={list} deleteList={this.props.deleteList} />
    })
    
    return (
      <div className="list-index">
        <DragDropContext onDragEnd={this.onDragEnd}>
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