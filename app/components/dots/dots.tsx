import styles from './dots.module.scss'
import DotsIcon from "../icons/dots"
import { useState } from 'react'
import HideIcon from '../icons/hide-idonc'
import FeedImproveIcon from '../icons/feed-improve-icon'
import LeftArrow from '../icons/left-arrow'

const Dots = () => {
    const [visiblePopUp, setVisiblePopUp] = useState<boolean>(false)
    const [hideContent,setHideContent] = useState<boolean>(false)

    return(
        <div className={styles.dots}>
            <div className={styles.dots__icon} onClick={()=>{setVisiblePopUp(!visiblePopUp) ;setHideContent(false)}}>
                <DotsIcon />
            </div>
            {
                visiblePopUp ?
                <div className={styles.dots__popUp}>
                    <div className={styles.dots__popUp__content}>
                        {
                            hideContent?
                            <div className={styles.dots__popUp__content__hide}>
                                <div className={styles.dots__popUp__content__hide__header} onClick={()=>setHideContent(false)}><LeftArrow/> <p>Tell us why:</p></div>
                                <ul>
                                    <li><input type="checkbox" /> <p>I’m not interested in this author</p></li>
                                    <li><input type="checkbox" /> <p>I’m not interested in this topic</p></li>
                                    <li><input type="checkbox" /> <p>I’ve seen too many posts on this topic</p></li>
                                    <li><input type="checkbox" /> <p>The information is incorrect</p></li>
                                    <li><input type="checkbox" /> <p>I’ve seen this post before</p></li>
                                    <li><input type="checkbox" /> <p>Other reasons</p></li>
                                </ul>
                                <div className={styles.dots__popUp__content__hide__button}>
                                    <button disabled>Hide content</button>
                                </div>
                            </div>
                            :
                            <ul>
                                <li onClick={()=>setHideContent(true)}><HideIcon/> <p>Hide</p></li>
                                <li><FeedImproveIcon/> <p>Improve my feed</p></li>
                            </ul>
                        }
                    </div>
                </div>:null
            }
            
        </div>
    )
}

export default Dots