import styles from './header.module.css';
import NavBar from "./nav-bar";
import SidebarButton from "./sidebar-button";
import LanguageSwitcher from "./language-switcher";
import useScrolledFromTop from "../../hooks/useScrolledFromTop";
import Socials from "./socials";
import {ReactComponent as KosiceLogo} from "../../assets/logo-white.svg";
import {ReactComponent as CPCLogo} from "../../assets/logo-cpc-text-cropped.svg";

export default function Header({
                                   sidebarToggle, setSidebarToggle
                               }) {
    const {scrolled} = useScrolledFromTop(50);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <a href={"/"}>
                <div className={styles.logo}>
                    <KosiceLogo className={styles.kosiceLogo}/>
                    <CPCLogo className={styles.cpcLogo}/>
                </div>
            </a>
            <NavBar/>
            <div className={styles.buttonsRight}>
                <LanguageSwitcher/>
                <Socials/>
                <SidebarButton sidebarToggle={sidebarToggle}
                               setSidebarToggle={setSidebarToggle}
                />
            </div>
        </header>
    );
}