# Bind Element Attributes
In addition to text interpolation, we can also bind element attributes like this:

```html
<div id="app-2">
	<p v-bind:title="message">
		Please hover your mouse over me for a few seconds
		to see my dynamically bound title!
	</p>
</div>
```

The `v-bind` attribute you are seeing is called a **directive**. Directives are prefixed with `v-` to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. Here it is basically saying "keep this element's `title` attribute up-to-date with the `message` property on the Vue instance."