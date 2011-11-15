!SLIDE bullets incremental
# Backbone.Events #

* Provides ability for objects to bind and trigger custom named events. 
* Events do not have to be declared before they are bound.
* Events may take passed arguments.

!SLIDE execute

# Extend, Bind, Trigger, Oh My...
	
	@@@ JavaScript
	
	var cow = {};

	_.extend(cow, Backbone.Events);

	cow.bind("jump", function(msg) {
		log("I just jumped: " + msg);
	});

	cow.trigger("jump", "over the moon");

!SLIDE execute

# 'All' Knowing
	
	@@@ JavaScript
	var cow = {};
	_.extend(cow, Backbone.Events);

	cow.bind("jump", function(msg) {
		log("I just jumped: " + msg);
	});
	
	cow.bind("all", function(eventName, msg) {
		log("I know what you did last trigger: " 
			+ eventName);
	});

	cow.trigger("jump", "over the moon");

!SLIDE

# Event Name Convention

## Namespace events using a colon as a separator

* poll:start
* change:name


!SLIDE 

# Providing Context
## This is it

!SLIDE

# This is bad

!SLIDE execute
	@@@ JavaScript
	var Moon = function() {
		this.distract = function() {
			this.trigger("distracted");
		};
	};
	_.extend(Moon.prototype, Backbone.Events);
	var Cow = function() {
		this.target = "over the moon";
		this.jump = function() {
			log("jump:" + this.target);
		};
	};
	var cow = new Cow(),
		moon = new Moon();
	moon.bind("distracted", cow.jump);
	moon.distract();


!SLIDE

# This is good

!SLIDE execute

	@@@ JavaScript
	var Moon = function () {
		this.distract = function() {
			this.trigger("distracted");
		};
	};
	_.extend(Moon.prototype, Backbone.Events);
	var Cow = function () {
		this.target = "over the moon";
		this.jump = function() {
			log("jump:" + this.target);
		};
	};
	var cow = new Cow (),
		moon = new Moon ();
	moon.bind("distracted", cow.jump, cow);
	moon.distract();

!SLIDE bullets incremental

# unbind

	@@@ JavaScript
	//remove the onChange callback
	object.unbind("change", onChange);
	
	// Removes all "change" callbacks.
	object.unbind("change");            

	// Removes all callbacks on object.
	object.unbind();                    

!SLIDE execute

# Trigger Arguments

	@@@ JavaScript
	
	var cow = {};
	_.extend(cow, Backbone.Events);
	
	cow.bind("jump", function(over, the, moon) {
		log(over + " " + the + " " + moon);
	});
	cow.trigger("jump", "over", "the", "moon");
	


	
