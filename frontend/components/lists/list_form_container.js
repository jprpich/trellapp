import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from '../../actions/list_actions';

const msp = state => ({
  list: { title: "" }
});

const mdp = dispatch => ({
  createList: (list) => dispatch(createList(list))
});

export default connect(msp, mdp)(ListForm);