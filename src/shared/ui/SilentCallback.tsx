import { useAuth } from 'react-oidc-context'
import { useEffect } from 'react'

const SilentCallback = () => {
    const auth = useAuth();

    useEffect(() => {
        if (auth.isAuthenticated && auth.user) {
            // Save refresh token to local storage during silent renewal.
            if (auth.user.refresh_token) {
                localStorage.setItem('refresh_token', auth.user.refresh_token);
            }
        }
    }, [auth.isAuthenticated, auth.user])


    return (
        <div>
            <h1>Processing authentication...</h1>
        </div>
    )
}

export default SilentCallback
