import { useState, useEffect } from "react";
import TambolaContext from "./TambolaContext";

const TambolaProvider = ({children}) => {

    const tambolaData = JSON.parse(localStorage.getItem("tambolaData"));

    const [ticketCount, setTicketCount] = useState(parseInt(tambolaData?.ticketCount) || 20);
    const [calledNumbers, setCalledNumbers] = useState(tambolaData?.calledNumbers || []);
    const [currentNumber, setCurrentNumber] = useState(tambolaData?.currentNumber || null);

    useEffect(() => {

        const tambolaData = { ticketCount, calledNumbers, currentNumber };
        localStorage.setItem("tambolaData", JSON.stringify(tambolaData));
      }, [ticketCount,calledNumbers,currentNumber]);

    return (
        <TambolaContext.Provider value = {{ticketCount, setTicketCount, calledNumbers, setCalledNumbers, currentNumber, setCurrentNumber}}>
            {children}
        </TambolaContext.Provider>
    )
}
export default TambolaProvider