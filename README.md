# Persistate

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
