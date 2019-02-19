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
    if (this.props.display.displayCardForm && this.props.list.id === this.props.display.listId){
      return (
        <div className="card-index">  
        {cards}
        <div className="show-card-form">
          <CardFormContainer listId={this.props.list.id} />
        </div>
      </div>
      )     
    } else {
      return (
      <div className="card-index">  
        {cards}
        <div className="show-card-form" onClick={() =>this.props.displayCardForm(this.props.list.id)}>
          <p>+ Add another card</p>
        </div>
      </div>
      )
    }
  }
}

export default withRouter(CardIndex)