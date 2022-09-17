import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

const RegisterPage = lazy(()=> import('../Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=> import('../Pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage/ContactsPage'));


const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....Load page</p>}>
            <Routes> 
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    )
};

export default UserRoutes;