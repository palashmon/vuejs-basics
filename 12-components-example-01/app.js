// Register a global component, we can use Vue.component(tagName, options)
// This is the Bootstrap Cards as Vue component
Vue.component('bootstrap-card', {
	
	props: ['header', 'title', 'text'],
	
	template: `
		<div class="card">
		
			<h3 class="card-header" @click="isVisible = !isVisible">{{ header }}</h3>
			
			<div class="card-block" v-if="isVisible">
				<h4 class="card-title">{{ title }}</h4>
				<p class="card-text">{{ text }}</p>
			</div>
			
		</div>
	`,
	
	data: function(){
		return {
			isVisible: true
		}
	}
})

// Creating a Vue Instance with new Vue()
var app12 = new Vue({
  el: '#app-12'
})


