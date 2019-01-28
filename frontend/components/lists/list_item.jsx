import React from 'react';



class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  deleteList() {
    this.props.deleteList(this.props.list.id);
  }

  render() {
    return (
      <>
        <div className="list-item">
          {this.props.list.title}
          <button className="delete-list" onClick={this.deleteList.bind(this)}><i class="fas fa-trash-alt"></i></button>
        </div>
      </>
    )
  }
}

export default ListItem