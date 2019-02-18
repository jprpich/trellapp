import { connect } from 'react-redux';
import CardForm from './card_form';
import { createCard } from '../../actions/card_actions';
import { closeModal } from '../../actions/modal_actions';
import { closeCardForm } from '../../actions/dropdown_actions';

const msp = (state, ownProps) => {
  return {
      card: { title: "", description: "" },
    }
};

const mdp = dispatch => ({
  createCard: (card) => dispatch(createCard(card)),
  closeModal: () => dispatch(closeModal()),
  closeCardForm: () => dispatch(closeCardForm())
});

export default connect(msp, mdp)(CardForm);