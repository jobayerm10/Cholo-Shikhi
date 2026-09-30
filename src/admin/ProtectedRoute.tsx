import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAdminAuthenticated } from './auth'

export default function ProtectedRoute() {
  const location = useLocation()

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
