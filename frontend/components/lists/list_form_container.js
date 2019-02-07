import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from '../../actions/list_actions';
import { closeModal } from '../../actions/modal_actions';
const msp = state => ({
  list: { title: "" }
});

const mdp = dispatch => ({
  createList: (list) => dispatch(createList(list)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(ListForm);