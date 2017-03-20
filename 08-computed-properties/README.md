# Computed Properties

Computed properties are useful in scenarios where the value of one variable depends on one or more other variables. In this example

We provide the user with an input asking them for a number and automatically return double that number. 

Instead of a computed property, we can define the same function as a method instead. For the end result, the two approaches are indeed exactly the same. However, the difference is that **computed properties are cached based on their dependencies**. A computed property will only re-evaluate when some of its dependencies have changed. This means as long as `num` has not changed, multiple access to the `doubleNum` computed property will immediately return the previously computed result without having to run the function again. 

You can open the console and play with the example vm yourself.

If we enter in console 

```javascript
app8.num = 299
app8.doubleNum
```

we will get the console message from the `doubleNum` computed property first time and also the return value from the function `598`.
But after that if we again enter in console `app8.doubleNum`, we will never get the console message, as we will get the previously cached/computed result always.