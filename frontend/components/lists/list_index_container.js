import { connect } from 'react-redux';
import Lists from './list_index';
import { receiveLists } from '../../actions/list_actions';

const msp = state => ({
  lists: Object.values(state.entities.lists)
});

const mdp = dispatch => ({
  receiveLists: (boardId) => dispatch(receiveLists(boardId))
});

export default connect(msp, mdp)(Lists);