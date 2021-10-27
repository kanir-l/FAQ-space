export interface ICategory {
    title: string,
    slug: string
}

export interface ISubCategory {
    title: string,
    slug: string
    category: ICategory
}

export interface IArticle {
    question: string,
    answer: Object,
    slug: string,
    category: ICategory,
    subCategory: ISubCategory
}

//Contentful + GraphQL
export interface GetCategoryByGraphQL {
    data: {
        categoryCollection: {
            total: number;
            items: ICategory[];
        }
    }
}

export interface GetSubCategoryByGraphQL {
    data: {
        subCategoryCollection: {
            total: number;
            items: ISubCategory[]
        }   
    }
}

export interface GetArticleByGraphQL {
    data: {
        articleCollection: {
            total: number;
            items: IArticle[]
        }
    }
}