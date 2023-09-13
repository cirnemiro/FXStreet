"use client"

import Image from 'next/image'
import MobileLogo from '../../../public/assets/logo-mobile.png'
import DesktopLogo from '../../../public/assets/logo-desktop.png'
import styles from './side-navbar.module.scss'
import { useMedia } from 'react-use';




const SideNavbar = () => {
    const isDesktop = useMedia("(min-width: 800px)");
    return(
        <div className={styles.sidenavbar}>
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
        </div>
    )
}

export default SideNavbar