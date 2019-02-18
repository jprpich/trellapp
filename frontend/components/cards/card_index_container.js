import { connect } from 'react-redux';
import Cards from './card_index';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { displayCardForm } from '../../actions/dropdown_actions';

const msp = (state) => {
  return {
    cards: state.entities.cards,
    display: state.ui.dropdown
  };
};

const mdp = dispatch => ({
  
  showCard: (id) => dispatch(openModal('show card', id)),
  showCardForm: (id) => dispatch(openModal('show card form', id)),
  displayCardForm: (id) => dispatch(displayCardForm(id))
});

export default withRouter(connect(msp, mdp)(Cards));