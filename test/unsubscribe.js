const {createState} = require('../index.js')

const persistent = createState()

const unsubscribe = persistent.subscribe(console.log)
persistent.subscribe(console.error)

persistent.setState({string: 'PRINT TWICE'})

unsubscribe()

persistent.setState({string: 'PRINT ONCE'})

persistent.unsubscribe(console.error)

persistent.setState({string: 'DO NOT PRINT'})
