import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import * as actions from '../../home.action';
import * as actionsTodoItem from '../../../todoItemPage/todoItem.action';
const TodoList = props => {
  const { todoList } = props.home;

  useEffect(() => {
    props.fetchTodoRequest();
    // eslint-disable-next-line
  }, []);

  const deleteTodo = id => {
    props.deleteTodoItemRequest({ params: { id }, onSuccess, onError });
  };

  const onSuccess = () => {
    props.fetchTodoRequest();
    toast.success('Delete success!');
  };

  const onError = err => {
    toast.error(err?.message);
  };

  return (
    <>
      <div className="todo-list container mt-4">
        <h3>Todo List:</h3>
        <div className="col-412 d-flex justify-content-end">
          <Link to={`/update-todo`}>
            <button type="button" className="btn btn-primary btn-add-todo mb-3">
              Add Todo Item +
            </button>
          </Link>
        </div>

        <div className="todo-info ">
          <div className="row">
            {todoList?.length ? (
              todoList.map((item, index) => {
                return (
                  <div key={index} className="col-12 col-md-6 mb-4">
                    <div className="block-inner">
                      <div className="media" key={index}>
                        <div className="media-body mt-1">
                          <div className="row m-0">
                            <div className="col-12 todo-content">
                              <Link to={`/todo-detail/${item.id}`}>
                                <h5 className="mt-0">{item.title}</h5>
                              </Link>
                              <p className="mt-1 format-text">Description: {item.description}</p>
                              <p className="mt-1">Completion status: {item.completionStatus}</p>
                            </div>
                            <div className="col-9 mt-1">
                              <p>Due date: {item.dueDate}</p>
                            </div>
                            <div className="col-3 pl-0 d-flex justify-content-end align-items-end">
                              <Link to={`/todo-detail/${item.id}`} className="view-todo-btn mr-2">
                                View
                              </Link>
                              <Link to={`/update-todo/${item.id}`} className="edit-todo-btn mr-2">
                                Edit
                              </Link>
                              <Link to="/" className="delete-todo-btn" onClick={() => deleteTodo(item.id)}>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="notfound-message">
                <div className="not-todo-found-message">No todo found</div>
              </div>
            )}
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
      fetchTodoRequest: actions.fetchTodoRequest,
      deleteTodoItemRequest: actionsTodoItem.deleteTodoItemRequest,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
