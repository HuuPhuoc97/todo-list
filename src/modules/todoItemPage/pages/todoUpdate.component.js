import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../todoItem.action';
import { toast } from 'react-toastify';
import { useParams, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TodoItemUpdateComponent = props => {
  const { todoDetail } = props.todo;

  const { register, handleSubmit, errors, reset, setValue } = useForm();

  const [isRedirect, setIsRedirect] = useState(false);

  const params = useParams();
  const [titlePage, setTitlePage] = useState('');

  useEffect(() => {
    if (params.id) {
      setTitlePage('Edit Todo Item');
      props.fetchTodoItemDetailRequest({ id: params.id });
    } else {
      setTitlePage('Add Todo Item');
    }

    return () => {
      reset();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (todoDetail && params.id) {
      setValue('title', todoDetail.title || '');
      setValue('description', todoDetail.description || '');
      setValue('completionStatus', todoDetail.completionStatus || '');
      setValue('dueDate', todoDetail.dueDate || '');
    }
    // eslint-disable-next-line
  }, [todoDetail]);

  const onSubmit = data => {
    if (params.id) props.putTodoItemRequest({ data: { ...data, idParam: params.id }, onSuccess, onError });
    else props.postTodoItemRequest({ data, onSuccess, onError });
  };

  const onSuccess = () => {
    reset();
    toast.success(titlePage + ' success!');
    setIsRedirect(true);
  };
  const onError = err => {
    toast.error(err?.message);
  };

  if (isRedirect) return <Redirect to={'/'} />;
  return (
    <>
      <div className="container todo-update-page">
        <div className="row d-flex justify-content-center">
          <div className="col-5 col-md-5">
            <h3 className="mb-3">{titlePage}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>
                  Title <span className="link-red-bold">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title of the todo"
                  name="title"
                  ref={register({ required: 'Title is require' })}
                />
                <small className="error">{errors.title?.message ? errors.title.message : ''}</small>
              </div>
              <div className="form-group">
                <label>
                  Description <span className="link-red-bold">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description of the todo"
                  name="description"
                  ref={register({ required: 'Description is require' })}
                />
                <small className="error">{errors.description?.message ? errors.description.message : ''}</small>
              </div>
              <div className="form-group">
                <label>
                  Completion Status <span className="link-red-bold">*</span>
                </label>
                <select
                  className="form-control"
                  placeholder="Completion Status of the todo"
                  name="completionStatus"
                  ref={register({ required: 'Completion Status is require' })}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Process">In Process</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                </select>
                <small className="error">
                  {errors.completionStatus?.message ? errors.completionStatus.message : ''}
                </small>
              </div>

              <div className="form-group">
                <label>
                  Due Date <span className="link-red-bold">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Due Date of the todo"
                  name="dueDate"
                  ref={register({ required: 'Due Date is require' })}
                />
                <small className="error">{errors.dueDate?.message ? errors.dueDate.message : ''}</small>
              </div>
              <div className="row ">
                <div className="col-12 ">
                  {/* <div className="row d-flex"> */}
                  <div>
                    <button type="submit" className="btn btn-primary btn-add-todo mr-2">
                      Save
                    </button>
                    <div className="btn btn-secondary btn-cancel">
                      <Link to="/">Cancel</Link>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </form>
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
      postTodoItemRequest: action.postTodoItemRequest,
      putTodoItemRequest: action.putTodoItemRequest,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemUpdateComponent);
