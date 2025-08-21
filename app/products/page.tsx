import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link  href={"products/1"}>Product 1</Link><br />
      <Link href={"products/2"}>Product 2</Link><br />
      <Link href={"products/3"}>Product 3</Link><br />
      <Link href={"products/4"}>Product 4</Link><br />
    </div>
  )
}

export default page
