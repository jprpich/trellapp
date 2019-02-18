import React from 'react';
import { withRouter } from 'react-router-dom';
import CardItem from './card_item';
import CardFormContainer from './card_form_container';

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
        <div className="show-card-form">
          <p>+ Add another card</p>
          <CardFormContainer listId={this.props.list.id}/>
        </div>
      </div>
    )
  }
}

export default withRouter(CardIndex)