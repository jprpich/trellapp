import { connect } from 'react-redux';
import Lists from './list_index';
import { receiveLists, deleteList } from '../../actions/list_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    lists: Object.values(state.entities.lists),
    board: state.entities.boards[ownProps.match.params.boardId] 
  } 
};

const mdp = dispatch => ({
  receiveLists: (boardId) => dispatch(receiveLists(boardId)),
  deleteList: (listId) => dispatch(deleteList(listId))
});

export default withRouter(connect(msp, mdp)(Lists));