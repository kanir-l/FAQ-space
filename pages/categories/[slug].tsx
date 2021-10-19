import type { NextPage } from 'next'
import React from 'react'
import { ICategory } from '../../interfaces/ICategory'

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
})

interface CategoryProps {
  subCategories: ICategory[]
}

const subCategories: NextPage<CategoryProps> = ({ subCategories }) => {

  const printSubCategories = subCategories.map((subCategory) => {
    return (
      <ul key={subCategory.fields.slug}>
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
      subCategories: data.items
    }
  }
}