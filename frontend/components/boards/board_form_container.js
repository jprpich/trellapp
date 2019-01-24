import { connect } from 'react-redux';
import BoardForm from './board_form';



const msp = state => ({
  board: { title: "" }
});

const mdp = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)) 
});

export default connect(msp, mdp)(BoardForm);