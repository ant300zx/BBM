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

var UserModel = Backbone.Model.extend({
	url: "delete"
});

var MultiUsersCollection = Backbone.Collection.extend({
	model: UserModel,
	localStorage: new Backbone.LocalStorage("user"),
	//url: "js/users.json",

	initialize: function() {}
});

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
		//var self = this;
		this.model.save({
			firstname: this.el.querySelector(".updateFirstName").value,
			lastname: this.el.querySelector(".updateLastName").value
		}).done(_.bind(function () {
			this.$(".savedMessage").show().delay(1000).fadeOut();
		}, this));
	}
});

var UsersCompositeView = Backbone.Marionette.CompositeView.extend({

	template: Handlebars.compile($("#usersTemplate").html()),
	tagName: "form",
	attributes: {
		action: "",
		method: "POST"
	},
	itemView: UserItemView,

	itemViewContainer: 'tbody',

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

MyApp.start();