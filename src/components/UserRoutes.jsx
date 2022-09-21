import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "Modules/PrivateRoute/PrivateRoute";
import PublicRoute from "Modules/PublicRoute/PublicRoute";
const RegisterPage = lazy(()=> import('../Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=> import('../Pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage/ContactsPage'));


const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....Load page</p>}>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
            </Routes>
        </Suspense>
    )
};

export default UserRoutes;