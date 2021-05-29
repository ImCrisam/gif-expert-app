import React, { useState } from "react";
import PropTypes from 'prop-types'


const AddCategory = ({ setcategorias }) => {
  const [inputValue, setinputValue] = useState("");

  const inputOnChange = (params) => {
    setinputValue(params.target.value);
  };

  const formSubmit = (params) => {
      params.preventDefault();
      if (inputValue.trim().length > 2) {
          setcategorias((params) => [inputValue,...params]);
          setinputValue('')
          
      }
  };

  return (
    <form onSubmit={formSubmit}>
      <input type="text" value={inputValue} onChange={inputOnChange}></input>
    </form>
  );
};

AddCategory.propTypes = {

    setcategorias: PropTypes.func.isRequired
}


export default AddCategory;
