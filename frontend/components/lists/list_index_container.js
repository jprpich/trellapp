import { connect } from 'react-redux';
import Lists from './list_index';
import { deleteList, receiveLists } from '../../actions/list_actions';
import { updateCard } from '../../actions/card_actions';
import {withRouter} from 'react-router-dom';


const msp = (state, ownProps) => {
  return {
    lists: Object.values(state.entities.lists),
    initialData: state.entities,
    board: state.entities.boards[ownProps.match.params.boardId] || null
  } 
};

const mdp = dispatch => ({
  deleteList: (listId) => dispatch(deleteList(listId)),
  receiveLists: (id) => dispatch(receiveLists(id)),
  updateCard: (card) => dispatch(updateCard(card))
});

export default withRouter(connect(msp, mdp)(Lists));