import { SyntheticEvent } from "react";

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

export interface KeyboardEvent<T = Element> extends SyntheticEvent<T> {
    altKey: boolean;
    /** @deprecated */
    charCode: number;
    ctrlKey: boolean;
    getModifierState(key: string): boolean;
    key: string;
    /** @deprecated */
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    /** @deprecated */
    which: number;
}