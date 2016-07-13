'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const validate = require('./validate');
// const getFormFields = require('../../lib/get-form-fields');

const mockService = require('../../js/MockService');


let choices = [];

$('#fieldBuilder').on('submit', function(event) {
  //creating variables to place in data for JSON object
  //take value of input id & store to variable
  validate.validateForm();
  let label = $('#labelInput').val();
  let defaultVal = $('#valueInput').val();
  //multiple selections for choices FieldService
  //creating empty array, check value of each input
  //if value isn't null, add item to the array

  choices.push(defaultVal);
  console.log(choices);

  choices.sort();
  let formData = {
    'label': label,
    'default': defaultVal,
    'choices': choices,
    'displayAlpha': true,
  };
  console.log(formData);
  //prevents page from reloading on submit
  event.preventDefault();
  mockService.FieldService.saveField(mockService.success, mockService.failure, formData);
});
