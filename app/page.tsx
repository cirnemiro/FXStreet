import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
   <div className={styles.home}>
      <Link href="/news"> Go to News section</Link>
   </div>
  )
}
