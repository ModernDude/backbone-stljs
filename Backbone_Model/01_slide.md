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

# Model Attributes
	
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

# Model Events
