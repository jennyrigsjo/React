import {useContext} from "react";
import {UserContext}  from '../../services/UserContext';
import Navigation from "./Navigation";
import HistoryButtons from "./HistoryButtons";

function Layout({children}) {

    const {user} = useContext(UserContext);
    const userStatus = (user.auth) ? `Logged in as '${user.name}'.` : `(Not logged in.)`;

    return (
    <>
        <header>
            <div>
                <Navigation />
                <HistoryButtons/>
            </div>
            <p><b>Login status:</b> {userStatus}</p>
        </header>
        
        <main>
            {children}
        </main>

        <footer>
            <span>&copy; Jenny Rigsjö</span>
        </footer>
    </>
    );
}

export default Layout;