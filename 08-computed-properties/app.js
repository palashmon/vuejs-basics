// Creating a Vue Instance with new Vue()
var app8 = new Vue({
  el: '#app-8',
  data: {
    num: 1
  },
  computed: {
	doubleNum: function(){
		
	   // Message shown first time in console for app8.num = 299
	   // But, never again after that for same number
	   console.log(Date.now());
		
	   // Get the entered number, multiply it with 2 and return the result
	   return this.num * 2;	
	}
  }
})