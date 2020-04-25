import { connect } from 'react-redux';
import { changeTitleComment, changeTextComment } from '../actions/comments';
import addCommentsModal from '../modal/addCommentsModal';

const mapStateToProps = (state) => ({
  newTitreComment: state.commentsReducer.form.title,
  newTextComment: state.commentsReducer.form.text,
});

const mapDispatchToProps = (dispatch) => ({
    inputChangeTitleComment: (event) => dispatch(changeTitleComment(event)),
    inputChangeTextComment: (event) => dispatch(changeTextComment(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(addCommentsModal);

