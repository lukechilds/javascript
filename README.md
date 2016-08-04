# Unsplash JavaScript Style Guide
*How we like to JavasScript at [Unsplash](https://www.unsplash.com)*.

## Table of Contents
- [Airbnb JavaScript Style Guide](https://github.com/unsplash/javascript#airbnb-javascript-style-guide)
- [Exceptions](https://github.com/unsplash/javascript#exceptions)
- [Additional Guidelines](https://github.com/unsplash/javascript#additional-guidelines)
- [Naming Conventions](https://github.com/unsplash/javascript#naming-conventions)
- [References](https://github.com/unsplash/javascript#references)

## Airbnb JavaScript Style Guide
Our guide is based off the excellent [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), with a few exceptions and additional guidelines.

## Exceptions
#### Objects
- Do not use trailing commas. [comma-dangle](http://eslint.org/docs/rules/comma-dangle)
  > It breaks your code in IE8.

  ```js
  // bad
  const user = {
    firstName: 'Han',
    lastName: 'Solo',
  };

  // good
  const user = {
    firstName: 'Han',
    lastName: 'Solo'
  };
  ```

#### Strings
- Limit your lines to 80 characters. [max-len](http://eslint.org/docs/rules/max-len)
  > Helps with readability and code reviews.

  ```js
  // bad
  const user = { name: 'Han Solo', 'best-friend': 'Chewie', ship: 'Millennium Falcon', affiliation: 'Rebel Alliance' };

  // good
  const user = {
    name: 'Han Solo',
    'best-friend': 'Chewie',
    ship: 'Millennium Falcon',
    affiliation: 'Rebel Alliance'
  };
  ```

#### Variables
- Do not reference global variables. [no-undef](http://eslint.org/docs/rules/no-undef)
  > Less globals, less headaches

  ```js
  // bad
  $(window).on("scroll", doSomething);

  // good
  import $ from "jquery";

  $(window).on("scroll", doSomething);
  ```

#### Comparison Operators & Equality
- Variables should always come before literal values in conditions. [yoda](http://eslint.org/docs/rules/yoda)
  > More natural way to describe the comparison.

  ```js
  // bad
  if ('Han' === firstName) {
    // ...
  }

  // good
  if (firstName === 'Han') {
    // ...
  }
  ```

#### Whitespace
- Avoid leaving multiple empty lines between statements. [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)
  > Consistent spacing across files

  ```js
  // bad
  function someFunction() {
    // ...
  }


  someFunction();

  // good
  function someFunction() {
    // ...
  }

  someFunction();
  ```

#### JSX
- Always use double-quotes in jsx. [jsx-quotes](http://eslint.org/docs/rules/jsx-quotes)
  > It's like html and clearly distinguishes HTML strings from JavaScript strings.

  ```js
  // bad
  render(firstName) {
    return (
      <div id='i-am'>
        {`I'm ${firstName}!`}
      </div>
    );
  }

  // good
  render(firstName) {
    return (
      <div id='i-am'>
        {`I'm ${firstName}!`}
      </div>
    );
  }
  ```

## Additional Guidelines
#### Objects
- Avoid Object mutations with Object.assign().

  ```js
  // bad
  const user = {
    'name': 'Han Solo'
  };
  user['best-friend'] = 'Chewie';

  const user {
    'name': 'Han Solo'
  };

  const userWithBestie = Object.assign({}, user, {
    'best-friend': 'Chewie'
  });
  ```

#### Functions
- Only write 'Pure' functions
  > They are predictable, testable and don't mutate the values passed to them. <br>
  > Learn more about [Pure and Impure Functions](https://egghead.io/lessons/javascript-redux-pure-and-impure-functions).

  ```js
  // bad
  function square(x) {
    someSideEffect(x);
    return x * x;
  }

  // good
  function square(x) {
    return x * x;
  }
  ```

- Always a strict mode directive at the beginning of a script/file. [strict](http://eslint.org/docs/rules/strict)

  ```js
  // bad
  function someFunction() {
    // ...
  }
  ```

  ```js
  'use strict';

  function someFunction() {
    // ...
  }
  ```

#### Arrays
- Use Array#concat or spread to add items to an Array.
  > Array#push is a [mutator method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods). <br>
  > Learn more about [avoiding Array mutations](https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread)

  ```js
  // bad
  const range = [1];
  range.push(2);

  // good
  const range = [1];
  const biggerRange = [].concat(range, [2]);

  // good es2015
  const range = [1];
  const biggerRange = [...range, 2];
  ```

#### Blocks
- Always use braces and multiple lines for block statements

  ```js
  // bad
  if (isValid) return console.log('Is valid');

  // good
  if (isValid) {
    return console.log('Is valid');
  }
  ```

#### Comments
- Use `//` for single and multi-line comments
  > Less thinking, more typing.

  ```js
  // bad
  /*
    This is a multiline
    comment.
  */
  function someFunction() {
    // ...
  }
  // good

  // This is a multiline
  // comment.
  function someFunction() {
    // ...
  }
  ```

## Naming Conventions
- Always use camelCase when naming variables

  ```js
  // bad
  const first_name = 'Han Solo';

  // good
  const firstName = 'Han Solo';
  ```

- Suffix Observable variables names with `$`.

  ```js
  const input = document.getElementById('input');

  // bad
  const keyup = Rx.Observable.fromEvent(input, 'keyup');

  // good
  const keyup$ = Rx.Observable.fromEvent(input, 'keyup');
  ```

- Prefix boolean state variable names with `is` or `has`.

  ```js
  const photos = [1, 2];

  // bad
  const photos = !!photos.length;

  // good
  const hasPhotos = !!photos.length;

  // bad
  const visible = !!photos.length;

  // good
  const isVisible = !!photos.length;
  ```

## References
#### ES2015
- [Understanding ES6](https://github.com/nzakas/understandinges6)

#### Arrays
- [Array#each](https://egghead.io/lessons/javascript-the-array-foreach-method)
- [Array#map](https://egghead.io/lessons/javascript-the-array-map-method)
- [Array#filter](https://egghead.io/lessons/javascript-the-array-filter-method)

#### Functions
- [Function declaration hoisting](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function#Function_declaration_hoisting)

#### Coercion
- [JavaScript Coercion](http://webreflection.blogspot.ca/2010/10/javascript-coercion-demystified.html)

#### Blocks
- [One True Brace Style](https://en.wikipedia.org/wiki/Indent_style#Variant:_1TBS)

#### Promises
- [We have a problem with Promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
