
// Register a global component, we can use Vue.component(tagName, options)
// This is the my-component as Vue component
Vue.component('my-component', {
	
    data() {
		return {
			progressRate: 0
		};
	},
    
	methods: {
		updateProgress() {
			this.progressRate += 1;
		}		
	},
		
	created() {
		
		// Update progressRate on initially
		this.updateProgress();
		
		// After 250 ms, update the progressRate value by 1
		const refreshId = setInterval(() => {
			
		  // Stop the timer once 100 progressRate is reached
		  if(this.progressRate > 100){
			  clearInterval(refreshId);
		  }
		  this.updateProgress();
		}, 100); 
	}
})

// Creating a Vue Instance with new Vue()
var app17 = new Vue({
  el: '#app-17'
})


