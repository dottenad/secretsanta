export default function MemberList() {
    return (
        <>
            <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {gift.title}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{gift.price}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{gift.url}</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <span onClick={handleClick} className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                        Delete
                    </span>
                </td>
            </tr>
        </>
    )
}
