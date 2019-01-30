import { connect } from 'react-redux';
import Lists from './list_index';
import { deleteList } from '../../actions/list_actions';
import {withRouter} from 'react-router-dom';

const msp = state => {
  return {
    lists: Object.values(state.entities.lists),
    initialData: state.entities
  } 
};

const mdp = dispatch => ({
  deleteList: (listId) => dispatch(deleteList(listId))
});

export default withRouter(connect(msp, mdp)(Lists));