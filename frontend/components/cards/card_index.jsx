import React from 'react';
import { withRouter } from 'react-router-dom';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const cards = this.props.cards.map(card => {
      if (card.list_id == this.props.listId) {
        return <li key={card.id}>{card.title}</li>
      } else {
        return null
      }
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