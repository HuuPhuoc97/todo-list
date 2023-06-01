// eslint-disable-next-line no-unused-vars
import { get } from 'lodash';
import Service from '../../services';

export const getTodoItemDetail = async params => {
  const response = await Service.get(`https://647700b99233e82dd53ab31c.mockapi.io/todo/${params.id}`, res => res);
  return response;
};
