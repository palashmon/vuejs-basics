# Class Binding

A common need for data binding is manipulating an element’s class list and its inline styles. Since they are both attributes, we can use `v-bind` to handle them: we just need to calculate a final string with our expressions.

We can pass an object to `v-bind:class` to dynamically toggle classes:

```html
<button v-bind:class="{ 'is-loading' : isLoading }">Click Me!</button>
```

The above syntax means the presence of the `is-loading` class will be determined by the [truthiness](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) of the data property `isLoading`.

### `v-bind` Shorthand

```html
<!-- full syntax -->
<button v-bind:class="{ 'is-loading' : isLoading }">Click Me!</button>
```

```html
<!-- shorthand -->
<button :class="{ 'is-loading' : isLoading }">Click Me!</button>
```