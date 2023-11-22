import React, { useContext, useEffect, useState } from 'react'
import TambolaContext from '../Context/TambolaContext'

const InputTicketCount = () => {

    const {ticketCount, setTicketCount, setCalledNumbers, setCurrentNumber} = useContext(TambolaContext)

    const[input,setInput] = useState(ticketCount)

    useEffect(()=>{
      setInput(ticketCount)
    }, [ticketCount])

    const handleCreateTicket = () => {
      setTicketCount(input)
      setCalledNumbers([])
      setCurrentNumber(null)
    }
    
  return (
    <div className='input-ticket'>
      Change Ticket Count : &nbsp;<input type="number" placeholder='Enter Ticket Count' value={input} onChange={(e)=> setInput(e.target.value)}/>
      &nbsp; <button onClick={handleCreateTicket}>Create Tickets</button>
    </div>
  )
}

export default InputTicketCount
