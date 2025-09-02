import {useAuthContext} from '../shared/hooks/AuthContext'

function ProfilePage() {
    const {user, logout} = useAuthContext()

    if (!user) {
        return <div>Loading...</div>
    }

    // const formatClaim = (_key: string, value: any) => {
    //     if (typeof value === 'object' && value !== null) {
    //         return JSON.stringify(value)
    //     }
    //     if (typeof value === 'boolean') {
    //         return value ? 'true' : 'false'
    //     }
    //
    //     if (typeof value === 'number') {
    //         return value.toString()
    //     }
    //
    //     return String(value || '')
    // }

    // const checkUserName = () => {
    //
    // }

    return (
        <div>
            Profile page: {user?.profile?.username}
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default ProfilePage;