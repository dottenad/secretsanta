import { useState } from "react"
import { XCircleIcon } from '@heroicons/react/20/solid'
import { useGiftsContext } from '../hooks/useGiftsContext'
import { useAuthContext } from "../hooks/useAuthContext"

export default function Gift() {
    const { dispatch } = useGiftsContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const gift = { title, price, url }

        const response = await fetch('/api/gifts', {
            method: 'POST',
            body: JSON.stringify(gift),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setPrice('')
            setUrl('')
            setError(null)
            console.log('New gift added', json)
            dispatch({ type: 'CREATE_GIFT', payload: json })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                    />
                </div>
                <label className="block text-sm font-medium text-gray-700">
                    Price
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                    />
                </div>
                <label className="block text-sm font-medium text-gray-700">
                    URL
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-6"
                >Add Gift</button>
                {error && <div className="rounded-md bg-red-50 p-4 mt-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">{error}</h3>
                        </div>
                    </div>
                </div>}
            </form>
        </>
    )
}

