import React, { useState } from 'react'
import Link from 'next/link'
import { ICategory } from '../../interfaces/ICategory';

const Categories = () => {
    const [categories, setCategories] = useState<ICategory>({ 
        title: "Knowledge",
        fields: {
            title: "",
            slug: ""
        }
    });

    return(
        <div>
            <Link href={`/categories/${categories.title}`}>{categories.title}</Link>
        </div>
    )
}
export default Categories