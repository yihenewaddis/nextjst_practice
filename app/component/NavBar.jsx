import Link from 'next/link'
import React from 'react'

export default function NvBar() {
  return (
    <main>
        <nav>
        <Link href='/'>Home</Link>
        <Link href='/ticket'>Tickets</Link>
        </nav>
        <div>
        </div>
    </main>
  )
}
