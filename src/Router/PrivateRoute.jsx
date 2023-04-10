import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

const PrivateRoute = () => {
    if (isAuthenticated()) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}

export default PrivateRoute