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
			
			// Make ajax call and book the ticket
			// Send message to parent to notify about this
			this.$emit('booked');
		}
	}
})

// Creating a Vue Instance with new Vue()
var app14 = new Vue({
  el: '#app-14',
  
  data: {
	  isTicketBooked: false
  },
  
  methods: {
	  onTicketBooked() {
		  this.isTicketBooked = true;
	  }
  }  
})


