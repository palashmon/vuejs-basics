# Using Components

To register a global component, you can use Vue.component(tagName, options). For example:

```javascript
Vue.component('my-component', {
  // options
})
```

Once registered, a component can be used in an instance's template as a custom element, `<my-component></my-component>`. Make sure the component is registered before you instantiate the root Vue instance. Here’s the full example:

```html
<div id="app-10">
  <my-component></my-component>
</div>
```