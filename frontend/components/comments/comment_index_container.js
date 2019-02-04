import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { receiveComments } from '../../actions/comment_actions';


const msp = state => {
  return {
    comments: Object.values(state.entities.comments),
    users: state.entities.users
  }
};

const mdp = dispatch => ({
  receiveComments: (cardId) => dispatch(receiveComments(cardId)),
});

export default connect(msp, mdp)(CommentIndex);