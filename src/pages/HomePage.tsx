import {PropertyGrid, SearchBar} from "../features/properties";
import {useAuth} from "../shared/hooks/useAuth";
import OneSignal from "react-onesignal";
import {useEffect} from "react";
import RemotePropertyApp from "../shared/ui/RemotePropertyApp.tsx";
import RemotePropertyViewerApp from "../shared/ui/RemotePropertyViewerApp.tsx";


function HomePage() {
    useEffect(() => {
        OneSignal.init({
                appId: "42c9d5b7-9e03-4de2-bd89-477d9caa5a83",
                allowLocalhostAsSecureOrigin: true,
            }
        );
    }, []);

    const {login} = useAuth()

    const handleLogin = () => {
        login()
    }

    return (
        <>
            <SearchBar/>
            {/*<PropertyGrid/>*/}
            <RemotePropertyApp/>
            <RemotePropertyViewerApp/>
            <div>
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
        </>
    )
}

export default HomePage;