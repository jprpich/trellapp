import { connect } from 'react-redux';
import ListItem from './list_item';
import { deleteList } from '../../actions/list_actions';

const msp = (state) => {
  return {
  } 
};

const mdp = dispatch => ({
  deleteList: (listId) => dispatch(deleteList(listId)),
  
});

export default connect(msp, mdp)(ListItem);