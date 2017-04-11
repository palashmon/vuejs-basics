// Creating a Vue Instance with new Vue()
new Vue({

	el: '#root',

	data: {
		shown: false,
		loading: false,
		username: '',
		avatar_url: '',
		blog: '',
		followers: '',
		following: '',
		public_repos: '',
		email: ''
	},

	methods: {
		getUserData() {

			var self = this;
			self.loading = true;

			setTimeout(() => {

			// Performing a GET request using axios
			axios.get('https://api.github.com/users/' + this.username)
				.then(function(response) {
					self.loading = false;
					console.log(response.data); // ex.: { user: 'Your User'}
					
					// Set the required params
					self.avatar_url = response.data.avatar_url;
					self.blog = response.data.blog;
					self.followers = response.data.followers;
					self.following = response.data.following;
					self.public_repos = response.data.public_repos;
					self.email = response.data.email;
					self.shown = true;

				}).catch(function(error) {
					console.log(error);
				});
			}, 1200); // run after 2 sec	
		}
	}

})