import { Link } from 'react-router-dom'

export default function Subheader(identifiers) {

    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900">{identifiers.title}</h1>
                </div>
                <div className="flex md:mt-0 md:ml-4">
                    <Link
                        to={identifiers.href}
                        type="button"
                        className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Create Group
                    </Link>
                </div>
            </div>
        </div>
    )
}