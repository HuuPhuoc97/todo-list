import React from 'react';

const Select = ({ register, id, defaultValue, isAll, name, options, errors }) => {
  return (
    <>
      <select id={id} value={defaultValue} name={name} ref={register}>
        {isAll ? <option value={isAll.value}>{isAll.label}</option> : ''}
        {options && options.length
          ? options.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))
          : ''}
      </select>
      <div>{errors && errors.message}</div>
    </>
  );
};

export default Select;
