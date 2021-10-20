interface Fields {
    title: string,
    description: string,
    slug: string
}

interface Sys {
    id: string
}

export interface ICategory {
    title: string,
    fields: Fields,
    sys: Sys
}