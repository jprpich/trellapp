import React from 'react';
import { withRouter } from 'react-router-dom';
import CardItem from './card_item';


class CardIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const cards = this.props.list.cardIds.map((cardId, index) => {
        return (
        <CardItem key={cardId} card={this.props.cards[cardId]} deleteCard={this.props.deleteCard} index={index}></CardItem >
        )
    })
  
    return (
      <div className="card-index">  
        {cards}
      </div>
    )
  }
}

export default withRouter(CardIndex)