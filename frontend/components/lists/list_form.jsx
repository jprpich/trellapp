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
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  render() {

    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input
                type="text"
                onChange={this.updateTitle.bind(this)}
                value={this.state.title}
                placeholder="Add list title"
                autoFocus="autofocus"
              />
            </div>
            <button>Create List</button>
          </form>
        </div>
      </>
    )
  }
}

export default withRouter(ListForm)