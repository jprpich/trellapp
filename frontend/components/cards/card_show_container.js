import { connect } from 'react-redux';
import CardShow from './card_show';
import {fetchCard, deleteCard, updateCard} from '../../actions/card_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
    card: state.entities.cards[state.ui.modal.id] || null
  }
};

const mdp = (dispatch) => {
  return {
    fetchCard: (id) => dispatch(fetchCard(id)),
    updateCard: (card) => dispatch(updateCard(card)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    closeModal: () => dispatch(closeModal()),
  }
};

export default connect(msp, mdp)(CardShow);