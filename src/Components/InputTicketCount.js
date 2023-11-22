import React, { useContext, useEffect, useState } from 'react'
import TambolaContext from '../Context/TambolaContext'

const InputTicketCount = () => {
    const {ticketCount, setTicketCount} = useContext(TambolaContext)

    const[input,setInput] = useState(ticketCount)

    useEffect(()=>{
      setInput(ticketCount)
    }, [ticketCount])
    
  return (
    <div className='input-ticket'>
      Enter Ticket Count : &nbsp;<input type="number" placeholder='Enter Ticket Count' value={input} onChange={(e)=> setInput(e.target.value)}/>
      &nbsp; <button onClick={()=>setTicketCount(input)}>Create Tickets</button>
    </div>
  )
}

export default InputTicketCount
