import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';


const msp = state => {
  return {
    comment: { body: "" },
    userId: state.session.id 
  }
  
  
};

const mdp = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
});

export default connect(msp, mdp)(CommentForm);