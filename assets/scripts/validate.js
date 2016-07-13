'use strict';

const validateForm = function(){
  let x = document.forms["fieldBuilder"]["labelInput"].value;
  if (x === null || x === "") {
    alert("Label is required");
    return false;
  }
};


module.exports = {
  validateForm,
};
