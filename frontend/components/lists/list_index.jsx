import React from 'react';
import { withRouter } from 'react-router-dom';
import ListItem from './list_item';
import ListFormContainer from './list_form_container';

class Lists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lists = this.props.lists.map(list => {
      return <ListItem key={list.id} list={list} deleteList={this.props.deleteList} />
    })
    
    return (
      <>
        <div className="list-index">
          {lists}
          <ListFormContainer />
        </div>
      </>
    )
  }
}

export default withRouter(Lists)