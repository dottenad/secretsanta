import { useAuthContext } from "./useAuthContext"
import { useGiftsContext } from "./useGiftsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: giftsDispatch } = useGiftsContext()

    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({ type: 'LOGOUT' })
        giftsDispatch({ type: 'SET_GIFTS', payload: null })
    }

    return { logout }
}