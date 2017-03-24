# Using Components Example 1

Here, we are trying to convert a [Bootstrap's Card](https://v4-alpha.getbootstrap.com/components/card/#header-and-footer) component into a full-fledged Vue component with behavior.

So, instead of doing this:

```html
<div class="card">
  <h3 class="card-header">Featured</h3>
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
```

We are simply doing

```html
<bootstrap-card
	header="Featured" 
	title="Special title treatment" 
	text="With supporting text below as a natural lead-in to additional content.">
</bootstrap-card>
```

using the `bootstrap-card` Vue component.