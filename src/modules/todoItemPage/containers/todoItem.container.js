import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TodoItemUpdateComponent, TodoItemDetailComponent } from '../pages';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default {
  TodoUpdateContainer: connect(mapStateToProps, mapDispatchToProps)(TodoItemUpdateComponent),
  TodoDetailContainer: connect(mapStateToProps, mapDispatchToProps)(TodoItemDetailComponent),
};
