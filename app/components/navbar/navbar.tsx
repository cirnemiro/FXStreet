import styles from './navbar.module.scss'


const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbar__section1}>
                <div className={styles.navbar__section1__left}>
                    <div className={styles.dot}></div>
                    <div className={styles.square}></div>
                </div>
                <div className={styles.navbar__section1__right}>
                    <div className={styles.square}></div>
                </div>
            </div>
            <div className={styles.navbar__section2}>
                <div className={styles.navbar__squares}>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.navbar__squares}>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.navbar__squares}>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.navbar__section3}>
                    <div className={styles.dot}></div>
                    <div className={styles.square}></div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar