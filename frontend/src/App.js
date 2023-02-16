import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'
import Nav from './components/Nav'
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Gifts from "./pages/Gifts";
import Groups from "./pages/groups/Groups";
import CreateGroup from './pages/groups/Create';

export default function App() {
    const { user } = useAuthContext()
    return (
        <>
            <BrowserRouter>
                <html className="h-full bg-gray-100">
                    <body className="h-full">
                        <div className="min-h-screen">
                            <Nav />
                            <main className="py-10">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={user ? <Index /> : <Navigate to="/login" />}
                                    />
                                    <Route
                                        path="/gifts"
                                        element={<Gifts />}
                                    />
                                    <Route
                                        path="/groups"
                                        element={<Groups />}
                                    />
                                    <Route
                                        path="/groups/create"
                                        element={<CreateGroup />}
                                    />
                                    <Route
                                        path="/login"
                                        element={!user ? <Login /> : <Navigate to="/" />}
                                    />
                                    <Route
                                        path="/signup"
                                        element={!user ? <Signup /> : <Navigate to="/" />}
                                    />
                                </Routes>
                            </main>
                        </div>
                    </body>
                </html >
            </BrowserRouter>
        </>
    )
}