export default function Member() {

    return (
        <>
            <form>
                <label className="block text-sm font-medium text-gray-700">
                    First Name
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                    />
                </div>
                <label className="block text-sm font-medium text-gray-700">
                    Last Name
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                    />
                </div>
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                    />
                </div>
                <button
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-1"
                >Add Member</button>
            </form>
        </>
    )
}

