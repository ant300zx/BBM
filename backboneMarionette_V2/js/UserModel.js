define(function(require){

	// Required
	var marionette = require("marionette");


	var UserModel = Backbone.Model.extend({
		url: "delete"
	});

	return UserModel;

});