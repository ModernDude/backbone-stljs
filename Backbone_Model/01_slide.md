!SLIDE bullets incremental
# Backbone.Model #
* Essence of Application
* Data and Logic
* State Synchronization

!SLIDE  

# Definition

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({});
	 
	
!SLIDE execute  

# Initialization

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({
	
		initialize:  function() {
			log("oink oink...");
		}
	
	});
	
	var pig = new Pig();

!SLIDE 

# Attributes
	
!SLIDE execute  

# Initializing Attributes

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({});
	
	var pig = new Pig({
		name: "Wilbur",
		age: 4});

!SLIDE execute  

# Getting Attributes

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({});
	
	var	pig = new Pig({
		name: "<script>alert('hi')</script>",
		age: 4});

	var name = pig.get("name");
	log(name);
	
	name = pig.escape("name");
	log(name);
	
!SLIDE execute  

# Setting Attributes

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({});
	
	var pig = new Pig({
		name: "Wilbur",
		age: 4});

	log(pig.get("name"));
	
	pig.set({name: "Jeff", age: 100});
	
	log(pig.get("name"));

!SLIDE execute

# Attribute Existence

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({});
	
	var pig = new Pig({name: "Wilbur"});

	log(pig.has("name"));
	log(pig.has("color"));


!SLIDE execute

# Remove an Attribute

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({});
	
	var pig = new Pig({name: "Wilbur"});

	log(pig.has("name"));
	
	pig.unset("name");
	
	log(pig.has("name"));
	
!SLIDE execute

# Remove all Attributes 

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({});
	
	var pig = new Pig({name: "Wilbur", age: 1});

	log(pig.has("name"));
	log(pig.has("age"));
	
	pig.clear();
	
	log(pig.has("name"));
	log(pig.has("age"));

!SLIDE execute

# Default Attributes

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({
		defaults: {
			name: "don't know",
			age: -1
		} 
	});
	
	var pig = new Pig({age: 22});
	
	log(pig.get("name"));
	log(pig.get("age"));

!SLIDE execute

# Cloning

	@@@ JavaScript
	
	var Pig = Backbone.Model.extend({});
	
	var sam = new Pig({name: "sam", age: 22});
	
	var bill = sam.clone(); 
	
	log(bill.get("name"));
	
	bill.set({name: "bill"});
	
	log(bill.get("name"));


!SLIDE

# Logic 

!SLIDE execute

	@@@ JavaScript
	var Pig = Backbone.Model.extend({
		defaults: {meals: 0}, 
		bellyFull: function () {
			return this.get("meals") > 2;
		},
		feed: function (meal) {
			if (this.bellyFull()) {
				this.trigger("puke");
			} else {
				this.set({"meals": 
					this.get("meals") + 1});
			}
		}
	});
	var pig = new Pig();
	pig.feed("garbage");


!SLIDE bullets incremental

# Validation

* **Validate** method in each model
* Called before **set** and **save**
* Accepts **attributes** to be updated

!SLIDE bullets incremental

# Validation

* If **Valid**, do not return
* If **Invalid** return error message
* Or custom error object

!SLIDE bullets incremental

# Validation

* If **Validate** returns string or object, 
  **set** or **save** will not proceed.
* In addition, the **error** event will be triggered.

!SLIDE

# Validation Example 

!SLIDE execute

	@@@ JavaScript
	var Pig = Backbone.Model.extend({
		validate: function(attrs) {
			log("try to set age to: " + attrs.age);
			if (attrs.age > 100) {
				return "I'm not that old!";
			}
		}
	});
	var pig = new Pig({age: 2});
	
	pig.bind("error", function(model, error) {
		log(error);
	});
	
	pig.set({age: 191});
	log(pig.get("age"));
	
!SLIDE

# Change Events

* **set** attribute triggers a **change** event 
* **change** events also triggered for specific attributes
* **suppress** change events with *{silent: true}*

!SLIDE

# Change Event Example 1

!SLIDE execute

	@@@ JavaScript
	
	var Chicken = Backbone.Model.extend({});
	var chick = new Chicken({status: "sleeping"});
	
	chick.bind("change", function(model) {
		log("change");
	});
	
	chick.bind("change:status", 
		function(model, status) {
			log("change:status");
	});

	chick.set({status: "tweeting"});

!SLIDE

# Change Event Example 2

!SLIDE execute

	@@@ JavaScript
	
	var Chicken = Backbone.Model.extend({});
	var chick = new Chicken({status: "sleeping"});
	
	chick.bind("change", function(model) {
		log("change");
	});
	
	chick.bind("change:status", 
		function(model, status) {
			log("change:status");
	});

	chick.set({status: "tweeting"}, 
		{silent: true});


!SLIDE 

# Identity

!SLIDE incremental bullets

# model.id

* Arbitrary **string** (integer id or UUID)
* When set as **attribute**, copied onto the model as a direct **property**. 

!SLIDE incremental bullets

# model.cid

* Unique identifier automatically assigned to all models when first created
* take the form: **c1, c2, c3 ...**

!SLIDE incremental bullets

# Change Tracking

* **hasChanged** determines of attr has changed since last change event
* **previous** gets previous value of changed attr 
* **changedAttributes** get attributes that have changed
* **previousAttributes** gets previous attributes
