import React from 'react';

class ShowShare extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-show">
        <div className="header">
          <div className="header-title">
            <h1>Share Board</h1>
          </div>
          <div className="close-card" onClick={this.props.closeModal}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="comments">
          <h1>Board Shares</h1>
        </div>
        <div className="description">
          <h1>Share With</h1>
          <form>
            <textarea
              placeholder="type email..."
            >
            </textarea>
            <button className="create-board-button">Share</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ShowShare