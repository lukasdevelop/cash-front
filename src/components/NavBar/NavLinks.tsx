import { motion } from 'framer-motion'

const NavLinks = (props: any) => {
    const animateFrom = { opacity: 0, y: -40}
    const animateTo = { opacity: 1, y: 0}

    return (
        <nav>
                <ul>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.05}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/">Home</a>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#about">About Me</a>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#skills">Skills</a>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#youtube">You Tube</a>
                    </motion.li>
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a href="/#contact">Contact</a>
                    </motion.li>
                </ul>
            </nav>
    );
}

export default NavLinks;