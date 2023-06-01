import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../todoItem.action';

const TodoItemDetailComponent = props => {
  const { todoDetail } = props.todo;
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      props.fetchTodoItemDetailRequest({ id: params.id });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container todo-detail-page">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 todo-detail mt-4 mb-4">
            <h3>Todo Detail: </h3>
            <h4 className="todo-title mt-3">Title: {todoDetail?.title}</h4>
            <p className="mt-3">Description: {todoDetail?.description}</p>
            <p className="mt-3">Completion status: {todoDetail?.completionStatus}</p>
            <p className="mt-3">Due date: {todoDetail?.dueDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  ...state,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodoItemDetailRequest: action.fetchTodoItemDetailRequest,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemDetailComponent);
