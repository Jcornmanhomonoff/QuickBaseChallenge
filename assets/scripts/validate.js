'use strict';

const validateForm = function(){
  let x = document.forms["fieldBuilder"]["labelInput"].value;
  if (x === null || x === "") {
    $('.alert').fadeIn('slow').delay(1000).fadeOut('slow');
    return false;
  }
};


// const checkLength = function(){
//   let x = document.forms["fieldBuilder"]["choicesInput"].value;
//   if (x.length > )
// }

module.exports = {
  validateForm,
};
