import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from '../../actions/list_actions';
import { closeListForm } from '../../actions/dropdown_actions';
const msp = state => {
  return {
    list: { title: "" }
  }
};

const mdp = dispatch => ({
  createList: (list) => dispatch(createList(list)),
  closeListForm: () => dispatch(closeListForm())
});

export default connect(msp, mdp)(ListForm);