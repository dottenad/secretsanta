export default function Subheader({ text }) {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
                <h1 className="text-2xl font-bold text-gray-900">{text}</h1>
            </div>
        </div>
    )
}