!SLIDE bullets incremental

# Backbone.View 

* Organize interface into logical **views**, backed by **models**
* Each **view** can be updated independently when the **model** changes
* Do not re-render entire page for changes! DUH!

!SLIDE bullets incremental

# Backbone.View 

* bind view's **render** function to the model's **change** event
* Do not dictate **HTML** or **CSS** structure 
* Use with any templating library

!SLIDE bullets incremental

# view.el 

* All views have a DOM element at all times
* Created from the view's **tagName**, **className**, and **id** properties
* In not specified, a **div** is used
* Can assign **el** to pre-existing elem


<!SLIDE>
<h1>Simplest View</h1>
<iframe style="width: 100%; height: 80%" src="http://jsfiddle.net/jeffsigmon/wBd2x/embedded/js,html,result,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
 
!SLIDE

# $

## If jQuery or Zepto is included on the page, each view has a $ function that runs queries scoped within the view's element.

!SLIDE bullets incremental

# Events Hash

* When extending **view**, declare events hash for dom
* Events are written in the format: 
*  **{"event selector": "callback"}**
* Omitting **selector** causes event to be bound to the view's **root** element

<!SLIDE>
<h1>Events Hash Example</h1>
<iframe style="width: 100%; height: 80%" src="http://jsfiddle.net/jeffsigmon/7cAZ8/embedded/js,html,result,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


!SLIDE

# Model in the View

## A model or collection can passed into the constructor function of a view.

<!SLIDE>
<h1>Model Binding Example</h1>
<iframe style="width: 100%; height: 80%" src="http://jsfiddle.net/jeffsigmon/7tvVc/embedded/js,html,result,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

!SLIDE bullets incremental

#  _ template

* Compiles templates into functions that can be evaluated for rendering
* Useful for rendering complicated bits of HTML from JSON
* **<%= … %>** Interpolate Variables
* **<% … %>** Eval Statements or Expressions
* **<%- … %>** Html Escape Expression

!SLIDE bullets incremental

# Two Ways To Use Templates

* Create a compiled function that can be evaled over diff context
* Immediately return template results from a source and context

!SLIDE execute

# Template Example 1

	@@@ JavaScript
	var compiled = 
		_.template("you won a: <%= prize %>");
		
	log(compiled({prize : 'pizza'}));
	log(compiled({prize : 'zebra donkey'}))

!SLIDE execute

# Template Example 2

	@@@ JavaScript
	var list = 
		"<% _.each(people,  function(name) { %> " +
		"<li><%= name %></li> <% }); %>";
	log(_.template(list, {
		people : [
			'moe', 
			'curly', 
			'larry']}));


<!SLIDE>
<h1>Template Example 3</h1>
<iframe style="width: 100%; height: 80%" src="http://jsfiddle.net/jeffsigmon/Kb4zn/embedded/js,html,result,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
