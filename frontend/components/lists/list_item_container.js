import { connect } from 'react-redux';
import ListItem from './list_item';
import { openModal } from '../../actions/modal_actions';
import { deleteList } from '../../actions/list_actions';

const msp = (state) => {
  return {

  } 
};

const mdp = dispatch => ({
  deleteList: (listId) => dispatch(deleteList(listId)),
  showCardForm: (id) => dispatch(openModal('show card form', id))
});

export default connect(msp, mdp)(ListItem);