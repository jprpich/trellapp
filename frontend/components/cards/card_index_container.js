import { connect } from 'react-redux';
import Cards from './card_index';
import { deleteCard } from '../../actions/card_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    cards: state.entities.cards
  };
};

const mdp = dispatch => ({
  
  showCard: (id) => dispatch(openModal('show card', id))
});

export default withRouter(connect(msp, mdp)(Cards));