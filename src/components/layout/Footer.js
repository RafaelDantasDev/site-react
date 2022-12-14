//import { FaFacebook, FaIntagram, FaLinkedin } from "react-icons/fa"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"

import styles from './Footer.module.css'

function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><BsFacebook/></li>
                <li><BsInstagram/></li>
                <li><BsLinkedin/></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer