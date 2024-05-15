import { notFound } from 'next/navigation'
import React from 'react'
export async function genereteStaticParams(){
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json();
    return tickets.map((ticket)=>({
        id:ticket.id
    }))
}

async function FetchTicet(id){
    const res = await fetch('http://localhost:4000/tickets/' + id,{
        next:{
            revalidate:60
        }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
}
export default async function Detail({params}) {
    const Id = params.id
    const Ticket = await FetchTicet(Id)
  return (
    <div>
        <nav>Ticket detail</nav>
        <div className="card">
            <h3>{Ticket.title}</h3>
            <p>{Ticket.body}</p>
        </div>
    </div>
  )
}
