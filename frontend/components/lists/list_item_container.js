import { connect } from 'react-redux';
import ListItem from './list_item';
import { displayListOptions, closeListOptions } from '../../actions/dropdown_actions';

const msp = (state) => {
  return {
    display: state.ui.dropdown
  } 
};

const mdp = dispatch => ({
  displayListOptions: (listId) => dispatch(displayListOptions(listId)),
  closeListOptions: () => dispatch(closeListOptions())
});

export default connect(msp, mdp)(ListItem);