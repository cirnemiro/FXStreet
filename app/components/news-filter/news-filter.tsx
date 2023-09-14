import Link from 'next/link'
import styles from './news-filter.module.scss'
import { useSearchParams } from 'next/navigation'

const NewsFilter = () => {

    const searchParams = useSearchParams()

    const filter = searchParams.get("filter")

    const filters = [
        {
            label: "Latest",
            value: "latest"
        },
        {
            label: "Popular",
            value: "popular"
        }
    ]

    return (
        <div className={styles.newsFilter}>
            <div className={styles.newsFilter__toggleFilter}>
                {
                    filters.map((link)=>{
                     return(
                        <Link key={link.value} href={`/news?filter=${link.value}`} className={filter === link.value ? styles.newsFilter__toggleFilter__selectedLink : styles.newsFilter__toggleFilter__link}>
                            {link.label}
                        </Link>
                     )   
                    })
                }
            </div>
            <div className={styles.newsFilter__filters}>
                Show: 
                <select>
                    <option>All</option>
                </select>
            </div>
           
        </div>
    )
}

export default NewsFilter