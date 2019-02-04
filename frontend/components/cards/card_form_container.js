import { connect } from 'react-redux';
import CardForm from './card_form';
import { createCard } from '../../actions/card_actions';

const msp = (state, ownProps) => ({
  card: { title: "", description: "" }
});

const mdp = dispatch => ({
  createCard: (card) => dispatch(createCard(card))
});

export default connect(msp, mdp)(CardForm);