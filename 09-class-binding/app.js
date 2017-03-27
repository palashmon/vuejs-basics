// Creating a Vue Instance with new Vue()
const app9 = new Vue({
  el: '#app-9',
  data: {
	isLoading: false
  },
  methods: {
	  toggleClass() {
		  this.isLoading = !this.isLoading
	  }
  }
});