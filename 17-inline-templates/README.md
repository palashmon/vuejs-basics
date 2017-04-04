# Inline Templates

Sometimes we want a component just for a single purpose. In such cases we can use `inline-template`. When the inline-template special attribute is present on a child component, the component will use its inner content as its template, rather than treating it as distributed content. This allows more flexible template-authoring.

```html
<my-component inline-template>
  <div>
    <p>These are compiled as the component's own template.</p>
    <p>Not parent's transclusion content.</p>
  </div>
</my-component>
```

However, `inline-template` makes the scope of our templates harder to reason about. As a best practice, prefer defining templates inside the component using the `template` option or in a `template` element in a `.vue` file.

Source: [vuejs.org](https://vuejs.org/v2/guide/components.html#Inline-Templates)