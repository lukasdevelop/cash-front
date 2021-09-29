import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import classes from './navbar.module.scss';

export default function NavBar () {
    return (
        <div className={classes.Navbar}>
            <Navigation />
            <MobileNavigation />
        </div>
    );

}