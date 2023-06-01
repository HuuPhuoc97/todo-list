import Service from '../../services';

export const fetchTodo = async params => {
  const response = await Service.get(`https://647700b99233e82dd53ab31c.mockapi.io/todo`, params);
  return response;
};
