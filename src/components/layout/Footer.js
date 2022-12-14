//import { FaFacebook, FaIntagram, FaLinkedin } from "react-icons/fa"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"

import styles from './Footer.module.css'

function Footer() {
    return(
        <footer>
            <ul>
                <li><BsFacebook/></li>
                <li><BsInstagram/></li>
                <li><BsLinkedin/></li>
            </ul>
        </footer>
    )
}

export default Footer