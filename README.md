# <img src="logo/logo.png" /> Persistate<br />[![npm version](https://img.shields.io/npm/v/persistate.svg?style=flat)](https://www.npmjs.com/package/persistate) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Persistate lets you create a simple persistent state that you can subscribe to.
It is similar to the state of React components.
You can use Persistate with React or whenever you need persistent state in your JavaScript project.

Persistate has no dependencies.


## Installation

```sh
npm install persistate
```


## Usage

```js
import {createState} from 'persistate'

const initialState = {counter: 1336}
const persistent = createState(initialState) // initial state is optional (defaults to {})

const unsubscribe = persistent.subscribe((state) => {
    console.log(state.counter) // do something with current state
})

setTimeout(() => {
    const {counter} = persistent.getState()

    persistent.setState({counter: counter + 1})
}, 1000)
```

The example above will console.log `1336` immediately, and then `1337` after 1 second.


## API


### Top-level

#### `createState([initialState])`

Creates a persistent state object.

##### Arguments

1. [`initialState`] _(Object)_: The initial state. Defaults to empty object.

##### Returns

A [persistent state object](#persistent-state-object).


---


### Persistent state object

A minimalistic store. It holds the state, lets you update it and subscribe to changes.


#### `getState()`

##### Returns

The current state.


#### `setState(partialState)`

Updates state by merging `partialState` into the current state. After the state is updated, all subscribers are notified.

##### Arguments

1. `partialState` _(Object)_: An object that contains the properties that should be updated.


#### `subscribe(callback)`

Adds a subscriber that is notified of state changes.

##### Arguments

1. `callback` _(Function)_: A function that is called whenever the state changes. The updated state is passed to `callback` as first argument.

##### Returns

A function that unsubscribes the `callback` from future state changes.


#### `unsubscribe(callback)`

Unsubscribe a callback from future state changes.

##### Arguments

1. `callback` _(Function)_: A `callback` function that should no longer be notified of state changes.
