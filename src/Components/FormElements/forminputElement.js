import React, { useState } from 'react';

const FormInputElement = props => {
  return (
    <React.Fragment>
        <label>{props.label}</label>
        <input
        className='form-control'
          type={props.controlType}
          onChange={props.searchHandler}
          value={props.inputValue}
          placeHolder={props.inputPlaceHolder}
        ></input>
    </React.Fragment>
  );
};

export default FormInputElement;
