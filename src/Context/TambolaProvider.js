import { useState } from "react";
import TambolaContext from "./TambolaContext";

const TambolaProvider = ({children}) => {

    const [ticketCount, setTicketCount] = useState(20)

    return (
        <TambolaContext.Provider value = {{ticketCount, setTicketCount}}>
            {children}
        </TambolaContext.Provider>
    )
}
export default TambolaProvider