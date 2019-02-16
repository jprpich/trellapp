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
        <CardItem key={cardId} card={this.props.cards[cardId]} index={index} showCard={this.props.showCard}></CardItem >
        )
    })
  
    return (
      <div className="card-index">  
        {cards}
        <div className="show-card-form" onClick={() => this.props.showCardForm(this.props.list.id)}>
          <p>+ Add another card</p>
        </div>
      </div>
    )
  }
}

export default withRouter(CardIndex)