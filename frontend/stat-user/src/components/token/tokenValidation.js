import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
import jwt_decode from 'jwt-decode'
import RedirectDialog from './redirectDialog'

function TokenValidationExp({ children }) {
    const location = useLocation()
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const isTokenExpired = useCallback(() => {
        const decodeToken = jwt_decode(token)
        const currentTime = Date.now() / 1000;
        return decodeToken.exp < currentTime;
    }, [token])

    useEffect(() => {
        if (token === null || isTokenExpired(token)) {
            setTimeout(() => {
                navigate('/sign-in')
            }, 5000)
        } else {
            navigate(location.pathname)
        }
    }, [token, location, isTokenExpired, navigate])
    if ((token === null || isTokenExpired(token)) && location.pathname !== '/sign-in' ) {
        return <RedirectDialog />
    } else {
        return children
    }
}

export default TokenValidationExp;