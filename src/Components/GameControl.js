import React, { useContext } from 'react'
import TambolaContext from '../Context/TambolaContext'

const GameControl = () => {

    const { calledNumbers, setCalledNumbers, setCurrentNumber, setTicketCount} = useContext(TambolaContext)

    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 90) + 1
        return number
    }

    const handleCallOutNumber = () => {
        let randomNumber;
        do {
            randomNumber = generateRandomNumber()
        } 
        while (calledNumbers.includes(randomNumber));

        setCurrentNumber(randomNumber)
        setCalledNumbers([...calledNumbers, randomNumber])
    }

    const handleNewGameButton = () => {
        setCalledNumbers([])
        setCurrentNumber(null)
        setTicketCount(20)
    }

    return (
        <>
        <div className='game-controller'>
            <button onClick={handleCallOutNumber}>Call Number</button>
            <button onClick={handleNewGameButton}>New Game</button>
        </div>
         <div className="show-called-numbers">
            <h2>Called Numbers : &nbsp; 
                {calledNumbers.map(number=> <span key={number}>{number} &nbsp;&nbsp;</span>)} 
            </h2>
        </div>
        </>
       
    )
}

export default GameControl
