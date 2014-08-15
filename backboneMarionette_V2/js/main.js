require.config({

	waitSeconds: 1,

	paths: {

		"underscore": "libs/lodash",
		"jquery": "libs/jquery",
		"backbone": "libs/backbone",
		"marionette": "libs/marionette"

	}

});


/* define or require to load dependencies */

// DEFINE

/*define(function(require){

	var marionette = require("libs/marionette");

	var MultiUsersCollection = require("MultiUsersCollection");
	var UsersCompositeView = require("UsersCompositeView");

	var MyApp = new Backbone.Marionette.Application();

	MyApp.addRegions({
		mainRegion: "#clientTable"
	});

	MyApp.addInitializer(function() {
		var multiUsersCollection = new MultiUsersCollection();
		var usersCompositeView = new UsersCompositeView({
			collection: multiUsersCollection
		});

		MyApp.mainRegion.show(usersCompositeView);
		multiUsersCollection.fetch();
		
	});

	MyApp.start();

});*/


// REQUIRE

require(["marionette", "MultiUsersCollection", "UsersCompositeView"],function(marionette, MultiUsersCollection, UsersCompositeView){

	var MyApp = new Backbone.Marionette.Application();

	MyApp.addRegions({
		mainRegion: "#clientTable"
	});

	MyApp.addInitializer(function() {
		var multiUsersCollection = new MultiUsersCollection();
		var usersCompositeView = new UsersCompositeView({
			collection: multiUsersCollection
		});

		MyApp.mainRegion.show(usersCompositeView);
		multiUsersCollection.fetch();
		
	});

	MyApp.start();

});