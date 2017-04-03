
// New class declaration
window.Event = new class{
	
	// creating and initializing the vue object
	constructor(){
		this.vue = new Vue();
	}
	
	// Wrapper function to call $emit
	fire(e, data = null){
		this.vue.$emit(e, data);
	}
	
	// Wrapper function to listen to any emitted vue custom event
	listen(e, callback){
		this.vue.$on(e, callback);
	}
}

// Register a global component, we can use Vue.component(tagName, options)
// This is the ticket as Vue component
Vue.component('ticket', {
	
	template: `
		<div class="column is-one-third">
			<p class="control">
				<input class="input" type="text" placeholder="Enter a Movie name" @blur="onMovieNameEntered" />
			</p>
		</div>
	`,
	methods: {
		onMovieNameEntered() {
			
			Event.fire('booked');	// instead of this.$emit('booked')			
		}
	}
})

// Creating a Vue Instance with new Vue()
var app15 = new Vue({
  el: '#app-15',
  
  data: {
	  isTicketBooked: false
  },
  
  // The created hook is called after the vue instance is created
  // More info: https://vuejs.org/images/lifecycle.png
  created() {	  
	  Event.listen('booked', () => this.isTicketBooked = true);
  }  
  
})


