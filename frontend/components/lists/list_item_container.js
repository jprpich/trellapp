import { connect } from 'react-redux';
import ListItem from './list_item';
import { displayListOptions, closeListOptions } from '../../actions/dropdown_actions';
import {deleteList} from '../../actions/list_actions';

const msp = (state) => {
  return {
    display: state.ui.dropdown
  } 
};

const mdp = dispatch => ({
  displayListOptions: (listId) => dispatch(displayListOptions(listId)),
  closeListOptions: () => dispatch(closeListOptions()),
  deleteList: (id) => dispatch(deleteList(id)) 
});

export default connect(msp, mdp)(ListItem);