import React from 'react';
import { withRouter } from 'react-router-dom';
import CardItem from './card_item';
import CardFormContainer from './card_form_container';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCardForm: false
    }
    this.displayCardForm = this.displayCardForm.bind(this);
    this.hideCardForm = this.hideCardForm.bind(this);
  }

  displayCardForm(){
    this.setState({
      displayCardForm: true
    })
  }

  hideCardForm(){
    this.setState({
      displayCardForm: false 
    })
  }


  render() {
    const cards = this.props.list.cardIds.map((cardId, index) => {
      return (
        <CardItem key={cardId} card={this.props.cards[cardId]} index={index} showCard={this.props.showCard}></CardItem >
      )
    })

    if (this.state.displayCardForm){
      return (
        <div className="card-index">  
        {cards}
        <div className="show-card-form" onClick={this.displayCardForm}>
          <CardFormContainer listId={this.props.list.id} hideCardForm={this.hideCardForm}/>
        </div>
      </div>
      )     
    } else {
      return (
      <div className="card-index">  
        {cards}
        <div className="show-card-form" onClick={this.displayCardForm}>
          <p>+ Add another card</p>
        </div>
      </div>
      )
    }
  }
}

export default withRouter(CardIndex)