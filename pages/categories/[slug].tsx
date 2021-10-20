import type { NextPage } from 'next'
import React from 'react'
import { ICategory } from '../../interfaces/ICategory'

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
})

interface CategoryProps {
  knowledgeCategory: ICategory[]
}

const subCategories: NextPage<CategoryProps> = ({ knowledgeCategory }) => {
  console.log(knowledgeCategory)
  const printSubCategories = knowledgeCategory.map((subCategory) => {
    return (
      <ul key={subCategory.sys.id}>
        <li>{subCategory.fields.title}</li>
      </ul>
    )
  }) 

  return (
   <div>
     {printSubCategories}
   </div>
  )
}

export default subCategories

export async function getServerSideProps() {
  let data = await client.getEntries({
    content_type: "knowledgeCategory"
  
  })

  return {
    props: {
      knowledgeCategory: data.items
    }
  }
}