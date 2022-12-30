import styles from "./Root.module.css";
import {Outlet, NavLink} from "react-router-dom";

const Root = () => {
    return(
        <>
        <header>
            <nav className={styles.topNavigation}>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? styles.active: styles.notactive} to="/"><p>Home</p></NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.active: styles.notactive} to="/componenten"><p>Componenten</p></NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.active: styles.notactive} to="/api"><p>API</p></NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.active: styles.notactive} to="/contact"><p>Contact</p></NavLink></li>
                </ul>
            </nav>
            <script defer>
                let currentpage = document.getElementsByTagName('title')[0].innerText;
                let navbutton = document.getElementById(currentpage.replace(" ","").toLowerCase());
                navbutton.setAttribute("id","huidigePagina")
            </script>
        </header>
        <Outlet/>
        </>
    );
}

export default Root;