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
        <CardItem key={cardId} card={this.props.cards[cardId]} deleteCard={this.props.deleteCard} index={index}></CardItem >
        )
    })
  

    // const cards = this.props.cards.map((card, index) => {
    //   if (card.list_id == this.props.listId) {
    //     return <CardItem key={card.id} card={card} deleteCard={this.props.deleteCard} index={index}></CardItem >
    //   } else {
    //     return null
    //   }
    // })
    return (
      <div className="card-index">  
        {cards}
        <CardFormContainer listId={this.props.list.id}/>
      </div>
    )
  }
}

export default withRouter(CardIndex)