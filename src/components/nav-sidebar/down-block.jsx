import styles from "../nav-sidebar/nav-sidebar.module.css";
import {FaFacebookF, FaPhoneAlt, FaTelegramPlane} from "react-icons/fa";

export default function DownBlock() {
    return (
        <div>
            <div className={styles.socials}>
                <a className={styles.socialsBtn} href="#" aria-label="Facebook">
                    <FaFacebookF/>
                </a>
                <a className={styles.socialsBtn} href="#" aria-label="Telegram">
                    <FaTelegramPlane/>
                </a>
                <a className={styles.socialsBtn} href="tel:+421908365995" aria-label="Phone">
                    <FaPhoneAlt/>
                </a>
            </div>
        </div>
    );
}