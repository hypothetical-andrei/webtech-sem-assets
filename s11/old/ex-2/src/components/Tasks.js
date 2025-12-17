import { useReducer } from 'react'

const initialState = { count: 0, history: [0] }

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1,
                history: [...state.history, state.count + 1],
            }
        case "decrement":
            return {
                count: state.count - 1,
                history: [...state.history, state.count - 1],
            }
        default:
            throw new Error()
    }
}
const Tasks = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log('state :>> ', state)

    return (
        <>
            <p>Tasks, count: {state.count}, history: {state.history.join(", ")}</p>
            <button onClick={() => {
                dispatch({ type: "increment" })
            }}>Increment</button>
            <button onClick={() => {
                dispatch({ type: "decrement" })
            }}>Decrement</button>
        </>
    )
}

export default Tasks;