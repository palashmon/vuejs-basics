// Register a global component, we can use Vue.component(tagName, options)
// This is the Modal as Vue component
Vue.component('modal', {
	
	props: ['text'],
	
	template: `
	
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
			<div class="box">
				<slot></slot>				
			</div>
		  </div>
		  <button class="modal-close" @click="$emit('closed')"></button>
		</div>
		
	`,
	
	data: function(){
		return {
			isVisible: true
		}
	}
})

// Creating a Vue Instance with new Vue()
var app13 = new Vue({
  el: '#app-13',
  
  data: {
	  isVisible: false
  }
})


