import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from 'react-oidc-context'

const AuthCallback = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        if (auth.isAuthenticated && auth.user) {
            // Save refresh token to local storage.
            if (auth.user.refresh_token) {
                localStorage.setItem('refresh_token', auth.user.refresh_token);
            }
            navigate('/profile', {replace: true});
        }
    }, [auth.isAuthenticated, auth.user, navigate])

    useEffect(() => {
        if (auth.error) {
            navigate('/', {replace: true});
        }
    }, [auth.error, navigate])
    
    return (
        <div>
            <h1>Processing authentication...</h1>
        </div>
    )
}

export default AuthCallback;
