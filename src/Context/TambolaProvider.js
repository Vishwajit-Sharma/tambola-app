import { useState } from "react";
import TambolaContext from "./TambolaContext";

const TambolaProvider = ({children}) => {

    const [ticketCount, setTicketCount] = useState(8)
    const [calledNumbers, setCalledNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(null);


    return (
        <TambolaContext.Provider value = {{ticketCount, setTicketCount, calledNumbers, setCalledNumbers, currentNumber, setCurrentNumber}}>
            {children}
        </TambolaContext.Provider>
    )
}
export default TambolaProvider