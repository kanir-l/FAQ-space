import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Home: NextPage = () => {

  return (
    <div>
      <Link href={`/FAQ`}>FAQ Help Center</Link>
    </div>
  )
}

export default Home

