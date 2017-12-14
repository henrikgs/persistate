const {createState} = require('../index.js')

const initialState = {counter: 1336}
const persistent = createState(initialState) // initial state is optional (defaults to {})

const unsubscribe = persistent.subscribe((state) => {
    console.log(state.counter) // do something with current state
})

setTimeout(() => {
    const {counter} = persistent.getState()

    persistent.setState({counter: counter + 1})
}, 1000)
