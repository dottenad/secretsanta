import { GiftsContext } from "../context/GiftContext";
import { useContext } from "react";

export const useGiftsContext = () => {
    const context = useContext(GiftsContext)

    if (!context) {
        throw Error('useGiftsContext must be used inside a GiftsContextProvider')
    }

    return context
}