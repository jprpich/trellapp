import { connect } from 'react-redux';
import Lists from './list_index';
import { receiveLists } from '../../actions/list_actions';
import { updateCardOrds, updateBetweenLists } from '../../util/card_api_util';
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
  updateCardOrds: (card) => updateCardOrds(card),
  updateBetweenLists: (card) => updateBetweenLists(card),
  showListForm: (id) => dispatch(openModal('show list form', id))
});

export default withRouter(connect(msp, mdp)(Lists));