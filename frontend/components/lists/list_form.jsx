import React from 'react';
import { withRouter } from 'react-router-dom';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createList({title: this.state.title, board_id: this.props.match.params.boardId});
    this.setState({
      title: ""
    })
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  render() {

    return (
      <>
        <div className="list-form"> 
          <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                onChange={this.updateTitle.bind(this)}
                value={this.state.title}
                placeholder="+ Add another list"
                autoFocus="autofocus"
              />
          </form>
        </div>
      </>
    )
  }
}

export default withRouter(ListForm)