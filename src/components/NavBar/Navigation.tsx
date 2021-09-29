import classes from './navbar.module.scss';
import NavLinks from "./NavLinks";

export default function Navigation() {
    return (
        <nav className={classes.Navigation}>
            <NavLinks />    
        </nav>
    );
}