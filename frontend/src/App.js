import Nav from './components/Nav'
import { useAuthContext } from './hooks/useAuthContext'
import { Outlet } from 'react-router-dom'

export default function App() {
    const { user } = useAuthContext()
    return (
        <>
            {user && (
                <html className="h-full bg-gray-100">
                    <body className="h-full">
                        <div className="min-h-screen">
                            <Nav />
                            <main className="py-10">
                                <Outlet />
                            </main>
                        </div>
                    </body>
                </html >
            )}
            {!user && (
                <p>No user found</p>
            )}
        </>
    )
}