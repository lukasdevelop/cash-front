import {useState} from 'react'
import classes from './navbar.module.scss';
import NavLinks from "./NavLinks";
import { CgMenuRound, CgCloseO } from 'react-icons/cg';

export default function MobileNavigation(){

    const [open, setOpen] = useState(false)

    const hamburgerIcon =  <CgMenuRound className={classes.Hamburger} size='40px' color='#8C1CD1' onClick={() => setOpen(!open)} />

    const closeIcon =  <CgCloseO className={classes.Hamburger} size='40px' color='#8C1CD1' onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false)

    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}