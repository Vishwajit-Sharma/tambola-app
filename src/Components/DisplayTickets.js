import React, {useState, useEffect, useContext } from 'react'
import TambolaContext from '../Context/TambolaContext'

const DisplayTickets = () => {

    const {ticketCount} = useContext(TambolaContext)
    const [totalGrids, setTotalGrids] = useState([]);
    

    useEffect(() => {
        const grids = []
        for(let i=0; i<ticketCount; i++){
            const grid = generateSingleGrid()
            grids.push(grid)
        }
        setTotalGrids(grids)
       
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
    <>
        <h2 align="center" style={{marginTop: "40px"}}>Tickets</h2>
        <div className='display-tickets-container'>
        {
            totalGrids.map((grid, index) => <div className='singleGrid' key={index}>
            { grid.map((row, ind) => <div className='eachRow' key={ind}>
                {
                    row.map((col,i) => <div className='eachColumn' key={i}>
                        <span style={col === "00" ? {visibility:"hidden"} : col === 11 ? {visibility:"visible", paddingRight: "1px"} : {visibility:"visible"}}>{col}
                        </span> </div>)
                }
                
            </div>)}
        </div> )
        }
        </div>
    </>
  )
}

export default DisplayTickets
