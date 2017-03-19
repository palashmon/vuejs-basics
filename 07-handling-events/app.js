// Creating a Vue Instance with new Vue()
var app7 = new Vue({
  el: '#app-7',
  data: {
    message: '!looc si sj.euV'
  },
  methods: {
    reverseMessage: function () {
	
	  // Split the message string by space to get each word as array item
	  // Reverse that array using Array.prototype.reverse()
	  // Join all elements of the array into a string
	  // Set the new string to the message property of data object above
      this.message = this.message.split('').reverse().join('')
    }
  }
})