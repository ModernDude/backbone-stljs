!SLIDE bullets incremental

# Backbone.sync

* **Function** called to **read** or **save** a model to the server
* Default, uses (jQuery/Zepto).ajax to make a RESTful **JSON** request. 
* **Override** it in order to use a different persistence strategy

!SLIDE bullets

# *sync(method, model, [options])*

* **method** – the CRUD method ("create", "read", "update", or "delete")
* **model** – the model to be saved (or collection to be read)
* **options** – success and error callbacks, and all other jQuery request options

!SLIDE bullets

# CRUD to REST Mapping

* create → **POST**   /collection
* read → **GET**   /collection[/id]
* update → **PUT**   /collection/id
* delete → **DELETE**   /collection/id


!SLIDE 

# The Payload

## Backbone.sync sends up a request to save a model, its attributes will be passed, serialized as JSON, and sent in the HTTP body with content-type application/json.

!SLIDE bullets 

# Persistence Functions

* model.fetch
* model.save
* model.destroy
* collection.create
* collection.fetch

!SLIDE 

# backbone.localStorage.js


!SLIDE

# Local Storage With Models

## https://github.com/k33g/ossicle

!SLIDE execute

# Save a Model

	@@@ JavaScript
	
	var House = Backbone.Model.extend({
        storeName : "houseDB"
    });
	
	var house = new House(
		{id:1, brick: "of course"});

	house.save(null, {
		success: function (e) {
			log("saved");
		}
	});

!SLIDE execute

# Fetch a Model

	@@@ JavaScript
	
	var House = Backbone.Model.extend({
        storeName : "houseDB"
    });
	
	var house = new House({id:1});

	house.fetch({
		success: function (m) {
			log("found: " + m.get("brick") );
		}
	});   

!SLIDE execute

# Destroy a Model

	@@@ JavaScript
	
	var House = Backbone.Model.extend({
        storeName : "houseDB"
    });
	
	var house = new House({id:1});

	house.destroy({
		success: function (m, r) {
			log("get lost punk" );
		}
	});

	
!SLIDE execute

# Are You Sure?

	@@@ JavaScript
	
	var House = Backbone.Model.extend({
        storeName : "houseDB"
    });
	
	var house = new House({id:1});

	house.fetch({
		error: function (m) {
			log("thank god");
		}
	});
	

!SLIDE execute

# But I Don't Know My ID!

	@@@ JavaScript
	
	var House = Backbone.Model.extend({
        storeName : "houseDB"
    });
	
	var house = new House({brick: "who cares"});
	log(house.isNew());
	house.save();
	log(house.isNew());
	log(house.cid);
	log(house.id);


!SLIDE execute

# Fetch A Collection

	@@@ JavaScript
	
	var House = Backbone.Model.extend({storeName : "house2DB"});
	var Ghetto = Backbone.Collection.extend({model : House, storeName : "house2DB"});
	
	var house1 = new House({id:1, name: "house1"});
	var house2 = new House({id:2, name: "house2"});
	house1.save();
	house2.save();
	var ghetto = new Ghetto();
	ghetto.fetch({error : 
		function(coll, res) {
			log(coll);
		}
	});


	

