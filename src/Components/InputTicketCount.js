import React, { useContext, useState } from 'react'
import TambolaContext from '../Context/TambolaContext'

const InputTicketCount = () => {
    const {setTicketCount} = useContext(TambolaContext)

    const[input,setInput] = useState(8)
    
  return (
    <div className='inputTicket'>
      Enter Ticket Count : &nbsp;<input type="number" placeholder='Enter Ticket Count' value={input} onChange={(e)=> setInput(e.target.value)}/>
      &nbsp; <button onClick={()=>setTicketCount(input)}>Create Tickets</button>
    </div>
  )
}

export default InputTicketCount
