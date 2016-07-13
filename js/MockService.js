'use strict';


const success = (data) => {
  console.log(data);
};

//so that code doesn't fail silently
const failure = (error) => {
  console.error(error);
};


var FieldService =  {
	getField: function(id) {
		return {
		  "label": "Sales region",
		  "required": false,
		  "choices": [
			"Asia",
			"Australia",
			"Western Europe",
			"North America",
			"Eastern Europe",
			"Latin America",
			"Middle East and Africa"
		  ],
		  "displayAlpha": true,
		  "default": "North America"
		};
	},

	saveField: function (succes, fail, data) {
		console.log(data);
	  $.ajax({
	    method:'POST',
	    url: "https://httpbin.org/post",
	    data: data
	  })
	  .done(success)
	  .fail(failure);
	}
};

module.exports = {
	FieldService,
	success,
	failure,
};
