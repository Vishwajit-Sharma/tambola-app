import { useContext } from "react"
import TambolaContext from "../Context/TambolaContext"

const DisplayBoard = () => {

    const { calledNumbers, setCalledNumbers, currentNumber, setCurrentNumber } = useContext(TambolaContext)


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
                  onClick={()=>handleBoardNumber(index)}
                >
                  {number}
                </div>
              ))}
            </>
        ) 
        
      };

      const handleBoardNumber = (index) => {

      }

    return (
        <div>
            <div className="show-called-numbers">
                <h2>Called Numbers : &nbsp;</h2>
                {calledNumbers.map((number, index) => (
                    <h4 key={index} className="called-number">
                        {number} &nbsp;&nbsp;
                    </h4>
                ))}
            </div>
            <h2 align="center">Board Numbers</h2>
            <div className="tambola-board">{renderBoardNumbers()}</div>
        </div>
    )
}
export default DisplayBoard