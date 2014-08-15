define(function(require){

	// Required
	require("libs/backbone.localStorage");
	var marionette = require("marionette");
	var UserModel = require('UserModel');


	var MultiUsersCollection = Backbone.Collection.extend({
		model: UserModel,
		localStorage: new Backbone.LocalStorage("user"),

		initialize: function() {}
	});

	return MultiUsersCollection;

});