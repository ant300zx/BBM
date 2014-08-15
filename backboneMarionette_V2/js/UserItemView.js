define(function(require){

	// Required
	var marionette = require("marionette");
	var handlebars = require("libs/handlebars");

	var UserItemView = Backbone.Marionette.ItemView.extend({
		template: Handlebars.compile($("#userTemplate").html()),
		tagName: "tr",
		className: "singleUser",

		events: {
			"click a.delete": "deleteUser",
			"click input.updateName": "updateUserName"
		},
		deleteUser: function() {
			this.model.destroy();
		},
		updateUserName: function(e) {
			this.model.save({
				firstname: this.el.querySelector(".updateFirstName").value,
				lastname: this.el.querySelector(".updateLastName").value
			}).done(_.bind(function () {
				this.$(".savedMessage").show().delay(1000).fadeOut();
			}, this));
		}
	});

	return UserItemView;

});