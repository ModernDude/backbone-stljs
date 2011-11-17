!SLIDE

# Backbone.Collection

!SLIDE bullets incremental

# Backbone.Collection

* ordered **sets** of models. 
* trigger **add** and **remove** events
* trigger any event triggered on **model**
* iterable via **underscore.js**

!SLIDE execute

# Sets
	@@@ JavaScript

	var Duck = Backbone.Model.extend({}),
		coll = new Backbone.Collection(),
		donald = new Duck({name: "donald"});
    
	var add = function(m, s) {
		try{coll.add(m);log(s);} 
		catch(e) {log(e);}
	};
	
	add({name: "donald"}, "1");
	add({name: "donald"}, "2");
	add(donald, "3");
	add(donald, "4");



!SLIDE execute

# Add Model
	@@@ JavaScript

	var Duck = Backbone.Model.extend({}),
		coll = new Backbone.Collection();
	
	coll.bind("add", function(duck) {
		log("duck added");
	});
	
	coll.add([new Duck({name: "Donald"})]);
	
	log(coll.length);

!SLIDE execute

# Remove Model
	@@@ JavaScript

	var Duck = Backbone.Model.extend({}),
		coll = new Backbone.Collection(),
		donald = new Duck({name: "donald"});
	
	coll.bind("remove", function(duck) {
		log("duck removed");
	});
	
	coll.add(donald);
	coll.remove(donald)
	
	log(coll.length);

!SLIDE execute

# Trigger model events

	@@@ JavaScript

	var Duck = Backbone.Model.extend({}),
		coll = new Backbone.Collection(),
		donald = new Duck({age: 1});

	coll.add(donald);
	coll.bind("change:age", 
		function(m, age) {
			log("age:" + age + " on id:" + m.cid);
		}
	);
	
	donald.set({age: 2});
	
!SLIDE execute

# Add Event
	@@@ JavaScript

	var Duck = Backbone.Model.extend({});

	var coll = new Backbone.Collection();
	
	coll.add([
		new Duck({name: "Donald"}), 
		new Duck({name: "Donald"})]);
	
	log(coll.length);

	
!SLIDE execute

# Get model by id
	@@@ JavaScript

	var coll = new Backbone.Collection();
	coll.add([
		{id: 1, name: "one"},
		{id: 2, name: "two"}]);
	
	var found = coll.get(2);
	
	log(found.get("name"));

!SLIDE execute

# Get model by cid
	@@@ JavaScript

	var coll = new Backbone.Collection();
	coll.add([
		{id: 1, name: "one"},
		{id: 2, name: "two"}]);
	
	var first = coll.at(1);
	var found = coll.getByCid(first.cid);
	
	log(found.get("name"));


!SLIDE bullets incremental

# Comparator

* Default **no** comparator
* Function maintains collection **sort** order
* Accepts model returns numeric or string value
* Return value is **compared** against other models

!SLIDE execute

# Comparator Example

	@@@ JavaScript
	
	var Dog  = Backbone.Model;
	var pound = new Backbone.Collection;

	pound.comparator = function(dog) {
		return dog.get("age");
	};

	pound.add(new Dog({age: 9, name: "End"}));
	pound.add(new Dog({age: 5, name: "Middle"}));
	pound.add(new Dog({age: 1, name: "Beginning"}));

	log(pound.pluck('name'));

!SLIDE 

# Reset

## Efficient way to bulk load or clear collection.



!SLIDE execute

# Extending a Collection

	@@@ JavaScript
	var Wolve  = Backbone.Model;
	
	var Pack = Backbone.Collection.extend({
		model: Wolve,
		initialize : function() {
			log("could also set comparator");
		}
	});
	
	var pack = new Pack([
		new Wolve({name: "white fang"}),
		new Wolve({name: "black flag"})]);
		

!SLIDE

# Proxies to Underscore.js for 26 iteration functions

forEach (each), map, reduce (foldl, inject), reduceRight (foldr), find (detect)
filter (select), reject, every (all), some (any), include, invoke
max, min, sortBy, groupBy, sortedIndex, toArray, size, first, rest, last
without, indexOf, lastIndexOf, isEmpty, chain

!SLIDE execute

# Map

	@@@ JavaScript
	var coll = new Backbone.Collection([
		{name: "Marty McFly", age: 18},
		{name: "Biff Tannen", age: 38},]);
		
	var future = function(coll, years) {
		return coll.map(function(m) {
			return {
				name: m.get("name"),
				age: m.get("age") + years}})
	};
	var theFuture = future(coll, 29);
	log(theFuture);
	
	
!SLIDE execute

# Reduce

	@@@ JavaScript
	var coll = new Backbone.Collection([
		{animal: "dog", age: 1},
		{animal: "cat", age: 3},
		{animal: "human", age: 6 }]);
	//get product of ages	
	var res = coll.reduce(function(memo, val) {
		return memo * val.get("age");
	}, 1);
	
	log(res);


