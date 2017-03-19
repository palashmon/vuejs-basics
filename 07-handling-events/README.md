# Handling Events

In Vue we can use the `v-on` directive to attach event listeners that invoke methods on our Vue instances.
In this example we are attaching the `click` event using `v-on:click` like:

```html
<button v-on:click="reverseMessage">Reverse Message</button>
```

Here, on click of the button we will call the `reverseMessage` method defined on our Vue instance like:

```javascript
var app7 = new Vue({
  el: '#app-7',
  data: {
    message: 'some text here'
  },
  methods: {
    reverseMessage: function () {
      // Our function logic here
    }
  }
})
```