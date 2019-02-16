import { connect } from 'react-redux';
import Cards from './card_index';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
    cards: state.entities.cards
  };
};

const mdp = dispatch => ({
  
  showCard: (id) => dispatch(openModal('show card', id)),
  showCardForm: (id) => dispatch(openModal('show card form', id))
});

export default withRouter(connect(msp, mdp)(Cards));