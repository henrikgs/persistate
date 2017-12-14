function createState(initialState) {
    var state = initialState || {}
    var subscribers = []

    function getState() {
        return state
    }

    function setState(partialState) {
        state = Object.assign(state, partialState)

        subscribers.forEach(function (subscriber) {
            subscriber(state)
        })
    }

    function unsubscribe(callback) {
        subscribers.splice(subscribers.indexOf(callback), 1)
    }

    function subscribe(callback) {
        subscribers.push(callback)
        callback(state)

        return function () {
            unsubscribe(callback)
        }
    }

    return {
        getState: getState,
        setState: setState,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    }
}

module.exports = {
    createState: createState
}
