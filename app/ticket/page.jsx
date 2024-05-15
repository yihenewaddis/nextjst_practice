import Image from 'next/image'
import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
export default function News() {
return (
    <div>
        <h2>Loading the data</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis impedit corporis nostrum accusamus odit nisi dolores blanditiis nobis laudantium?</p>
        <Suspense fallback={<Loading/>}>
            <TicketList/>
        </Suspense>
    </div>
)
}
