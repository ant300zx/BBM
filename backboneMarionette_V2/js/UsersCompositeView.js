define(function(require){

	// Required
	var marionette = require("marionette");
	var UserItemView = require("UserItemView");
	var handlebars = require("libs/handlebars");


	var UsersCompositeView = Backbone.Marionette.CompositeView.extend({

		template: Handlebars.compile($("#usersTemplate").html()),
		tagName: "form",
		attributes: {
			action: "",
			method: "POST"
		},
		childView: UserItemView,

		childViewContainer: 'tbody',

		events: {
			"click .add": "addUser"
		},

		addUser: function(e) {
			
			this.collection.create({
				firstname: this.el.newFirstName.value,
				lastname: this.el.newLastName.value
			});

			this.el.reset();
			e.preventDefault();

		}
	});

	return UsersCompositeView;

});