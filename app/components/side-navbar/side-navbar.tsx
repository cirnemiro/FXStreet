"use client"

import Image from 'next/image'
import MobileLogo from '../../../public/assets/logo-mobile.png'
import DesktopLogo from '../../../public/assets/logo-desktop.png'
import styles from './side-navbar.module.scss'
import useMediaQuery from '@/hooks/desktop-mediaquery'


const SideNavbar = () => {
    const {isDesktop} = useMediaQuery()
    return(
        <nav className={styles.sidenavbar}>
                {
                    isDesktop ?
                    <div className={styles.sidenavbar__desktoplogo}>
                        <Image alt='mobile logo' src={DesktopLogo}/>
                    </div>
                    :
                    <div className={styles.sidenavbar__mobile}>
                        <Image alt='mobile logo' src={MobileLogo}/> 
                        <div className={styles.sidenavbar__mobile__menu}>
                            <div className={styles.sidenavbar__mobile__menu__dot}></div>
                            <div className={styles.sidenavbar__mobile__menu__dot}></div>
                        </div>     
                    </div>      
                }
            {
                isDesktop &&
                <div className={styles.sidenavbar__content}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default SideNavbar