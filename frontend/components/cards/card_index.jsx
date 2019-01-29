import React from 'react';
import { withRouter } from 'react-router-dom';
import CardItem from './card_item';
import CardFormContainer from './card_form_container';


class Cards extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const cards = this.props.cards.map(card => {
      if (card.list_id == this.props.listId) {
        return <CardItem key={card.id} card={card} deleteCard={this.props.deleteCard}></CardItem >
      } else {
        return null
      }
    })
    return (
      <div className="card-index">  
        {cards}
        <CardFormContainer listId={this.props.listId}/>
      </div>
    )
  }
}

export default withRouter(Cards)