import React from 'react';

const Input = ({ register, name, errors, placeholder, id }) => {
  return (
    <>
      <input type="input" id={id} placeholder={placeholder} name={name} ref={register} />
      <div>{errors && errors.message}</div>
    </>
  );
};

export default Input;
