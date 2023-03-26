import React from "react";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaRavelry } from 'react-icons/fa';


function Footer() {
    return (
        <ul>
            <IconContext.Provider value={{ className: "footer-icons", size: "2.5rem"}}>
            <li><a href="https://github.com/rbkeyes" alt="Link to github profile"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/reedkeyesrd/" alt="link to linkedin profile"><FaLinkedin /></a></li>
            <li><a href="https://www.ravelry.com/people/highfiberhabit" alt="link to ravelry profile"><FaRavelry /></a></li>
            </IconContext.Provider>
        </ul>
    );
}

export default Footer;