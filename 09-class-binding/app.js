// Creating a Vue Instance with new Vue()
var app9 = new Vue({
  el: '#app-9',
  data: {
	isLoading: false
  },
  methods: {
	  toggleClass: function(){
		  this.isLoading = !this.isLoading
	  }
  }
})