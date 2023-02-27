import {
    Routes,
    Route,
    Navigate,
    BrowserRouter
} from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'
import Nav from './components/Nav'
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Gifts from "./pages/Gifts";
import Groups from "./pages/groups/Groups";
import CreateGroup from './pages/groups/Create';

function App() {
    const { user } = useAuthContext()
    return (
        <>
            <html className="h-full bg-gray-100">
                <body className="h-full">
                    <div className="min-h-screen">
                        <BrowserRouter>
                            {user ? <Nav /> : null}
                            <main className="py-10">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={user ? <Index /> : <Navigate to="/login" />}
                                    />
                                    <Route
                                        path="/gifts"
                                        element={user ? <Gifts /> : <Navigate to="/login" />}
                                    />
                                    <Route
                                        path="/groups"
                                        element={user ? <Groups /> : <Navigate to="/login" />}
                                    />
                                    <Route
                                        path="/groups/create"
                                        element={user ? <CreateGroup /> : <Navigate to="/login" />}
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
                        </BrowserRouter>
                    </div>
                </body>
            </html >
        </>
    )
}

export default App;