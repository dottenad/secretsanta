import {
    Routes,
    Route,
    Navigate,
    BrowserRouter,
    Link
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
                                        exact
                                        index
                                        element={<Index />}
                                    />
                                    <Route
                                        exact
                                        path="gifts"
                                        element={<Gifts />}
                                    />
                                    <Route
                                        exact
                                        path="groups"
                                        element={<Groups />}
                                    />
                                    <Route
                                        exact
                                        path="groups/create"
                                        element={<CreateGroup />}
                                    />
                                    <Route
                                        exact
                                        path="login"
                                        element={<Login />}
                                    />
                                    <Route
                                        exact
                                        path="signup"
                                        element={<Signup />}
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