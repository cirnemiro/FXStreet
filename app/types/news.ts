export interface IArticle {
    id: string,
    title: string,
    content: string,
    imageUrl: string,
    publicationTime: string,
    isPopular: boolean,
    feed: string,
    subFeed: string,
    author: IAuthor
}

interface IAuthor {
    id: number,
    name: string,
    companyName: string,
    imageUrl: string
}

export interface Filters{
    popular:boolean
}