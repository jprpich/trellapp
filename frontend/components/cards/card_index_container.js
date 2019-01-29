import { connect } from 'react-redux';
import Cards from './card_index';
import { receiveCards, deleteCard } from '../../actions/card_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    cards: Object.values(state.entities.cards),
    listId: ownProps.listId
  };
};

const mdp = dispatch => ({
  deleteCard: (cardId) => dispatch(deleteCard(cardId))
});

export default withRouter(connect(msp, mdp)(Cards));