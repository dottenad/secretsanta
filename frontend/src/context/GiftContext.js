import { createContext, useReducer } from "react";

export const GiftsContext = createContext()

export const giftsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GIFTS':
            return {
                gifts: action.payload
            }
        case 'CREATE_GIFT':
            return {
                gifts: [action.payload, ...state.gifts]
            }
        case 'DELETE_GIFT':
            return {
                gifts: state.gifts.filter((g) => g._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const GiftsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(giftsReducer, {
        gifts: null
    })

    return (
        <GiftsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GiftsContext.Provider>
    )
}