import { useContext } from "react"
import TambolaContext from "../Context/TambolaContext"

const DisplayBoard = () => {

    const {calledNumbers, currentNumber } = useContext(TambolaContext)


    const renderBoardNumbers = () => {
        const numbers = []
        for(let i = 1; i<=90; i++){
            numbers.push(i)
        }
        

        return (
            <>
            {numbers.map((number, index) => (
                <div
                  key={number}
                  className={`board-number ${
                    calledNumbers.includes(number) ? "called" : ""
                  } ${currentNumber === number ? "current" : ""}`}
                >
                  {number}
                </div>
              ))}
            </>
        ) 
        
      };

    return (
        <div>
            <h2 align="center">Board Numbers</h2>
            <div className="tambola-board">{renderBoardNumbers()}</div>
        </div>
    )
}
export default DisplayBoard