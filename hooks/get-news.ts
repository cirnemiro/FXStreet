import { IArticle } from "@/app/types/news"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function useGetNews(){

    const searchParams = useSearchParams()

    const filter = searchParams.get("filter")
    
    const [isLoading ,setIsLoading] = useState<boolean>(true)
    const [data ,setData] = useState<any>(null)
    const [error,setError] = useState<any>(null)


    useEffect(()=>{
        try {
            setIsLoading(true)
            fetch("http://demo7743668.mockable.io/frontend-exercise")
                .then((response) => response.json())  
                    .then((data) => {
                        if (filter === "popular") {
                            setData(data.filter((article:any) => article.isPopular === true))
                        }else if (filter === "latest"){
                            setData(data.filter((article:any) => article.isPopular === false))

                        }else{
                            setData(data)
                        }
                        setIsLoading(false)
                    });
                    
        } catch (error) {
            setError(error)
        }
    },[filter])

    return {data,isLoading,error}
}