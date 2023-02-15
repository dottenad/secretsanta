import { useEffect, useState } from 'react';
import Gift from '../components/Gift';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Home() {

    const [gifts, setGifts] = useState(null)
    const { user } = useAuthContext()


    useEffect(() => {
        const fetchGifts = async () => {
            const response = await fetch('/api/gifts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setGifts(json)
            }
        }

        if (user) {
            fetchGifts()
        }

    }, [user])

    return (
        <>
            {gifts && gifts.map((gift) => (
                <p key={gift._id}>{gift.title}</p>
            ))}
            <Gift />
        </>
    )
}