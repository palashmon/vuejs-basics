# Two-Way Data Binding

Vue provides the `v-model` directive that makes two-way binding between form input such as `<input>`, `<textarea>` and `<select>` and app state a breeze. The value of the `v-model` directive is the data we wish to update on user input events as we can see in this example.

To prove this 2 way data binding between the `<input>` element and the underlying `message` string, we can dump the `message` property of data object declared in the Vue instance to the page using the `message` property between double curly braces which essentially tells Vue to replace whatever is between those curly braces `{{ }}` with the property in the corresponding data object.