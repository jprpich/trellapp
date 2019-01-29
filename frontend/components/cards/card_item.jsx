import React from 'react';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteCard() {
    this.props.deleteCard(this.props.card.id);
  }

  render() {
    return (
      <>
        <div className="card-item">
          {this.props.card.title}
          <button className="delete-card" onClick={this.deleteCard.bind(this)}><i className="fas fa-trash-alt"></i></button>
        </div>
      </>
    )
  }
}

export default CardItem