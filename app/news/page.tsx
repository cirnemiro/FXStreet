"use client"
import styles from './page.module.scss'
import NewsFilter from "../components/news-filter/news-filter";
import useGetNews from "@/hooks/get-news";
import Article from "../components/article/article";
import useMediaQuery from '@/hooks/desktop-mediaquery';
import { IArticle } from '../types/news';

const News = () => {
   
    const {data,isLoading,error} = useGetNews()

    const {isDesktop} = useMediaQuery()

    return(
        <div className={styles.news}>
           <div className={styles.news__content}>
                <NewsFilter/>
                {
                    data ? data.map((article:IArticle)=>{
                        return(
                            <Article key={article.id} article={article as IArticle}/>
                        )
                    })
                    : isLoading ? <>Loading...</> : <>Error</>
                    
                }
           </div>
           {
                isDesktop ? 
                <div className={styles.news__aside}>
                    <div className={styles.news__aside__article1}>

                    </div>
                </div>:null
           }
        </div>
    )
}

export default News