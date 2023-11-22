import React, {useState, useEffect, useContext } from 'react'
import TambolaContext from '../Context/TambolaContext'

const DisplayTickets = () => {

    const {ticketCount} = useContext(TambolaContext)
    const [totalGrids, setTotalGrids] = useState([]);
    
    useEffect(() => {
        const totalGrids = []
        for(let i=0; i<ticketCount; i++){
            const grid = generateSingleGrid()
            totalGrids.push(grid)
        }
        setTotalGrids(totalGrids)
       
      }, [ticketCount]);
   
      const generateSingleGrid = () => {
        let grid = []
        const distinctNumbers = new Set();

        while(distinctNumbers.size < 15){
            const randomNumber = Math.floor(Math.random() * 90) + 1;
            distinctNumbers.add(randomNumber);
        }
        const distinctNubersArray = Array.from(distinctNumbers)
      
        let index = 0
        for(let i=0; i<3; i++){
            let rows = [] 
            const distinctColumns = new Set();
            while(distinctColumns.size < 5){
                const randomColumn = Math.floor(Math.random() * 9);
                distinctColumns.add(randomColumn);
            }
            const distinctColumnArray = Array.from(distinctColumns)
            for(let j=0; j<9; j++){
                if(distinctColumnArray.includes(j)){
                    rows.push(distinctNubersArray[index] <= 9 ? "0"+distinctNubersArray[index] : distinctNubersArray[index])
                    index++
                }
                else {
                    rows.push("00")
                }           
            }
            grid.push(rows)
        }
        return grid
      }
 
 
  return (
    <div>
        <h2>Tickets</h2>
        <div className='displayTicketsContainer'>
        {
            totalGrids.map(grid => <div className='singleGrid'>
            { grid.map(row => <div className='eachRow'>
                {
                    row.map(col => <div className='eachColumn'><span style={col === "00" ? {visibility:"hidden"} : col === 11 ? {visibility:"visible", paddingRight: "1px"} : {visibility:"visible"}}>{col}</span></div>)
                }
                <br/>
            </div>)}
        </div> )
        }
        </div>
    </div>
  )
}

export default DisplayTickets
