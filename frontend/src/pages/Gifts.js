import { GiftsContextProvider } from '../context/GiftContext'
import MyGiftRequestListMiddleware from '../components/MyGiftRequestListMiddleware'

export default function Gifts() {
    return (
        <>
            <GiftsContextProvider>
                <MyGiftRequestListMiddleware />
            </GiftsContextProvider>
        </>
    )
}