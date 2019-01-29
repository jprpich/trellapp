import React from 'react';
import { withRouter } from 'react-router-dom';
// import ListItem from './list_item';
// import ListFormContainer from './list_form_container';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.receiveCards(this.props.match.params.listId);
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.list.id != this.props.match.params.listId) {
    //   this.props.receiveCards(this.props.match.params.listId);
    // }
  }

  render() {
    // const cards = this.props.cards.map(card => {
    //   return <CardItem key={card.id} card={card} deleteCard={this.props.deleteCard} />
    // })

    const cards = this.props.cards.map(card => {
      return <li key={card.id}>{card.title}</li>
    })
    return (
      <>
        <div className="card-index">
          <ul>
            {cards}
          </ul>
        </div>
      </>
    )
  }
}

export default withRouter(Cards)