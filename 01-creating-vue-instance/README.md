# Creating Vue Instance
A Vue instance is created using the `Vue()` constructor and takes in an options object that specifies the element to mount on. In this case we are creating a new Vue instance and specifying the element to be mounted via the CSS selector: `#app`.

### Declarative Rendering

We can declaratively render data to the DOM using straightforward template syntax:

```html
<div id="app">
  {{ message }}
</div>
```