# Using Components within Components

In previous example we saw how we can use Vue Components.

In this example we can see that how easily we can create a child component and then used the same component within another component multiple time using `v-for`. This helps in reusability and minimisation of DOM elements used.

You can see the only tag we have in DOM:

```html
<div id="app-11">
  <car-list></car-list>
</div>
``` 

Instead of:

```html
<div id="app-11">
  <ol>
	<li v-for="car in cars">
	  {{ car.name }}
	</li>
  </ol>
</div>
``` 

This is power of Vue Components for you :cool: