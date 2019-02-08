import { connect } from 'react-redux';
import Lists from './list_index';
import { deleteList, receiveLists } from '../../actions/list_actions';
import { updateCard, updateCardOrds } from '../../util/card_api_util';
import {withRouter} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    lists: Object.values(state.entities.lists),
    initialData: state.entities,
    board: state.entities.boards[ownProps.boardId] || null
  } 
};

const mdp = dispatch => ({
  receiveLists: (id) => dispatch(receiveLists(id)),
  updateCard: (card) => updateCard(card),
  updateCardOrds: (card) => updateCardOrds(card),
  showListForm: (id) => dispatch(openModal('show list form', id))
});

export default withRouter(connect(msp, mdp)(Lists));