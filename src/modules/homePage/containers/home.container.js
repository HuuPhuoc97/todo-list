import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodoRequest } from '../home.action';
import { deleteTodoItemRequest } from '../../todoItemPage/todoItem.action';

import HomeComponent from '../pages/Home.component';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchTodoRequest, deleteTodoItemRequest }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
