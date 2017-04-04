
// Register a global component, we can use Vue.component(tagName, options)
// This is the Modal as Vue component
Vue.component('modal', {
	
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                        <slot name="header"></slot>
                    </p>
                    <button class="delete"></button>
                </header>
                <section class="modal-card-body is-unselectable">
                    <slot></slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer">
                        <a class="button">Close</a>
                    </slot>
                </footer>
            </div>
        </div>
    `
	
})

// Creating a Vue Instance with new Vue()
var app16 = new Vue({
  el: '#app-16'
})


