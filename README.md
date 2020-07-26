# Learn Unit Testing

Unit tests check that small individual parts of your code work in isolation.

## Writing testable code

It can be difficult to figure out what a "unit" of your code is. Generally the easiest thing to test is a "pure" function: a function that always returns the same output when given the same input (without changing anything else).

For example this is not pure:

```js
let url = "https://pokeapi.co/api/v2/";
function makeUrl(name) {
  url += name;
}
```

because it changes the `url` variable outside the function. It's not safe to call this multiple times:

```js
makeUrl("pikachu");
console.log(url); // "https://pokeapi.co/api/v2/pikachu"
makeUrl("bulbasaur"); // "https://pokeapi.co/api/v2/pikachubulbasaur"
```

This version is pure:

```js
function makeUrl(name) {
  const url = "https://pokeapi.co/api/v2/";
  return url + name;
}
```

which makes it much easier to test.

### Challenge

1. Clone this repo
1. Open `workshop/index.js` in your editor and read the `makeUrl` definition
1. Open `workshop/index.test.js` and write a test for `makeUrl`
1. Open `workshop/index.html` and check your test passes

## Deep equality

Sometimes we'll need to test functions that return objects or arrays. This can be awkward as objects that _look_ the same are not equal to each other. For example:

```js
const x = { name: "oliver" };
const y = { name: "oliver" };
console.log(x === y); // false (x and y are different objects with the same properties)
```

We can work around this by testing if specific _properties_ of objects are the same. We can do the same for array _elements_ (e.g. checking that the first thing in both arrays is the same).

Bear in mind this doesn't guarantee that _all_ the things inside are the same, just the ones you check.

### 1 Challenge

1. Open `workshop/index.js` in your editor
1. Write a `searchParamsToObject` function
   - It should take a querystring like `"name=oliver&email=hello@oliverjam.es"`
   - It should return an object like `{ name: "oliver", email: "hello@oliverjam.es" }`
1. Write a test for this function in `workshop/index.test.js`

## Edge-cases

Unit tests are great for checking edge-cases. Since a unit is usually small and self-contained we can check it with all kinds of different input to make sure we get what we expect.

This is where manual testing would be very tedious: manually entering `0`, then `-1`, then `""`, then `"hello"`, then `99999999999999999` into an input to see what happens.

### 2 Challenge

A [leap year](https://en.wikipedia.org/wiki/Leap_year) has an extra day (February 29th) to account for a solar year actually being 365.24... days long. They usually occur every 4 years, but in order to stay consistent there are extra rules: years divisible by 100 are **not** leap years, and years divisible by 400 **are**.

For example `2020` and `2000` were leap years, but `1900` was not.

1. Write an `isLeapYear` function in `workshop/index.js`
1. It should take a year and either return an error message or a boolean
1. Write several tests to check your function works correctly
1. Make sure you account for and test all possible edge-cases
   - What happens if you pass a string?
   - What happens if you pass a negative year?
