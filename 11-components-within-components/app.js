// Register a global component, we can use Vue.component(tagName, options)
// This is parent component list
Vue.component('car-list', {
  template: `
	<ol>
		<car-item v-for="car in cars">
		  {{ car.name }}
		</car-item>
	</ol>`,
  data: function(){
	  return {
		  cars: [
			{ name: 'Audi' },
			{ name: 'Aston Martin' },
			{ name: 'BMW' },
			{ name: 'Ferrari' },
			{ name: 'Volkswagen' }
		  ]
	  }
  }
})

// This is child component items
Vue.component('car-item', {
  template: '<li><slot></slot></li>'
})

// Creating a Vue Instance with new Vue()
var app11 = new Vue({
  el: '#app-11'
})


