import React from 'react'
import Link from 'next/link'

export default function F1() {
  return (
    <div>
      <h1 className='text-white text-3xl font-bold'>F1 Page</h1>
      <Link href={"/f1/f2"}>F2</Link>
    </div>
  )
}
