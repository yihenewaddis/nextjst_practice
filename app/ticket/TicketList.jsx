import Link from 'next/link'
import React from 'react'
async function FetchTicet(){
  await new Promise(resolve=>setTimeout(resolve,3000))
    const res = await fetch('http://localhost:4000/tickets',{
        next:{
            revalidate:0
        }
    })
    return res.json()
}
export default async function TicketList() {
    const ticket = await FetchTicet()
    
  return (
    <>
      {ticket.map((tickets)=>(
        <Link href={`/ticket/${tickets.id}`}>
        <div className='card my-5' key={tickets.id} >
            <h3>{tickets.title}</h3>
            <p>{tickets.body}...</p>
        </div>
        </Link>
      ))}
    </>
  )
}
