interface Fields {
    title?: string,
    slug: string
    question?: string,
    answer?: string
    category: ICategory;
    subCategory: ISubCategory;
}

interface Sys {
    id: string
}

export interface ICategory {
    title: string,
    slug: string
}

export interface ISubCategory {
    title: string,
    slug: string
}

export interface IArticle {
    question: string,
    answer: string,
    slug: string,
    category: string,
    subCategory: string
}