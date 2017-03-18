# Conditional Rendering with v-show
Using `v-show` directive we can toggle the presence of an element.

`v-show` can be used in pretty much the same was as `v-if`, the difference is in the way they show and hide content.
`v-show` will always render the content regardless of the truthyness of the expression value whereas `v-if` will only render the content if the expression is true. This means the `v-show` just use `style="display:none"` to show/hide the content, but it is always rendered in DOM.
Whereas, `v-if` will completely destroy and reconstruct the element based on the expression value.

Currently you can see some text on the page, but if enter `app4.isSeen = false` in the console. You should see the message disappear.

Also, if you try entering `app4.isSeen = !app4.isSeen` multiple times, you will the toggle display behavior with text showing, hiding, showing and so on.