import ClockIcon from "../icons/clock-icon"
import NewsTypeIcon from "../icons/news-type-icon"
import RightArrowIcon from "../icons/right-arrow-icon"
import styles from "./article.module.scss"
import Avatar from '../../../public/assets/avatar.png'
import Image from "next/image"
import HTMLContent from "../html-content/html-content"
import { IArticle } from "@/app/types/news"
import LikeSaveButon from "../like-save-button/like-save-button"
import DateConverter from "../date/date-converter"
import useMediaQuery from "@/hooks/desktop-mediaquery"
import Dots from '../dots/dots'

interface IArticleProps {
    article: IArticle
}

const Article = ({article}:IArticleProps) => {

    const {isDesktop} = useMediaQuery()

    return(
        <div className={styles.article}>
            <div className={styles.article__header}>
                <div className={styles.article__header__type}>
                    
                    <div className={styles.article__header__type__feed}> <NewsTypeIcon/><p>{article.feed}</p></div>
                    {isDesktop?<RightArrowIcon/>:null}
                    <p className={styles.article__header__type__subFeed}>{article.subFeed}</p>
                </div>
                <div className={styles.article__header__date}>
                    <ClockIcon/>
                    <DateConverter ISOdate={article.publicationTime}/>
                </div>
            </div>
            <div className={styles.article__content}>
                <div className={styles.article__content__header}>
                    <div className={styles.article__content__header__avatar}>
                        <Image alt="avatar" src={Avatar}/>
                    </div>
                    <div>
                        <p className={styles.article__content__header__companyName}>{article.author.name} | {article.author.companyName}</p>
                        <p className={styles.article__content__header__title}>{article.title}</p>
                    </div>
                </div>
                <div className={styles.article__content__article}>
                    <HTMLContent html={article.content}/>
                    {
                        article.imageUrl.length !== 0 ?
                            <div className={styles.article__content__article__image}>
                                <img alt="article image" src={article.imageUrl}/>
                            </div>:null
                    }
                </div>
                <div className={styles.article__content__footer}>
                    <LikeSaveButon type="Like"/>
                    <LikeSaveButon type="Save"/>
                    <Dots/>
                   
                </div>
            </div>
        </div>
    )
}

export default Article