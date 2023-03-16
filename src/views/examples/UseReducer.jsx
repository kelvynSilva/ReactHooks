import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,

    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'mult7':
            return { ...state, number: state.number * 7 }
        case 'div':
            return { ...state, number: state.number / 25 }
        case 'somaN':
            return { ...state, number: state.number + action.payload }
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [value, setValue] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>) :
                    (<span className="text">Sem Usuário</span>
                    )}
                <span className="text">{parseInt(state.number)}</span>
                <div>
                    <div>
                        <input type="text" className='input' value={value} onChange={e => setValue(e.target.value)} />
                    </div>
                    <button className="btn" onClick={() => dispatch({ type: "numberAdd2" })}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: "login", payload: 'monique' })}>login</button>
                    <button className="btn" onClick={() => dispatch({ type: "mult7" })}>*7</button>
                    <button className="btn" onClick={() => dispatch({ type: "div" })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: "somaN", payload: -1 })}>+N</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
