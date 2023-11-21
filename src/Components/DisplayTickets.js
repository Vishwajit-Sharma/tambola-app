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
            while(distinctColumns.size < 9){
                const randomColumn = Math.floor(Math.random() * 5);
                distinctColumns.add(randomColumn);
            }
            const distinctColumnArray = Array.from(distinctColumns)
            for(let j=0; j<9; j++){
                if(distinctColumnArray.includes(j)){
                    rows.push(distinctNubersArray[index])
                    index++
                }
                else {
                    rows.push(null)
                }           
            }
            grid.push(rows)
        }
        return grid
      }

    // const generateRandomNumbers = () => {
    //     const numbers = [];
    //     for (let i = 1; i <= 90; i++) {
    //       numbers.push(i);
    //     }
    //     return numbers.sort(() => Math.random() - 0.5);
    //   };
      
    //   const generateGrid = () => {
    //     const grid = [];
    //     for (let i = 0; i < 9; i++) {
    //       const row = [];
    //       for (let j = 0; j < 3; j++) {
    //         row.push({ value: null });
    //       }
    //       grid.push(row);
    //     }
    //     return grid;
    //   };
      
    //   const generateRandomFilledGrid = () => {
    //     const randomNumbers = generateRandomNumbers();
    //     const grid = generateGrid();
      
    //     for (let i = 0; i < 5; i++) {
    //       const row = Math.floor(Math.random() * 9);
    //       const col = Math.floor(Math.random() * 3);
    //       const num = randomNumbers[i];
    //       grid[row][col] = { value: num };
    //     }
      
    //     return grid;
    //   };
      
    //   const generateRandomGrids = (count) => {
    //     const grids = [];
    //     for (let i = 0; i < count; i++) {
    //       grids.push(generateRandomFilledGrid());
    //     }
    //     return grids;
    //   };
      
    // const generateSingleGrid = () => {
    //     let grid = []
    //     const distinctNumbers = new Set();

    //     while(distinctNumbers.size < 15){
    //         const randomNumber = Math.floor(Math.random() * 90) + 1;
    //         distinctNumbers.add(randomNumber);
    //     }
    //     const distinctNubersArray = Array.from(distinctNumbers)
      
    //     let index = 0
    //     for(let i=0; i<3; i++){
    //         let rows = [] 
    //         const distinctColumns = new Set();
    //         while(distinctColumns.size < 9){
    //             const randomColumn = Math.floor(Math.random() * 5);
    //             distinctColumns.add(randomColumn);
    //         }
    //         const distinctColumnArray = Array.from(distinctColumns)
    //         for(let j=0; j<9; j++){
    //             if(distinctColumnArray.includes(j)){
    //                 rows.push(distinctNubersArray[index])
    //                 index++
    //             }
    //             else {
    //                 rows.push(null)
    //             }           
    //         }
    //         grid.push(rows)
    //     }

    //     return (
    //         <React.Fragment>
    //            { grid.map(row => <div className='eachRow'>
    //                 {
    //                     row.map(col => <div className='eachColumn'>{col}</div>)
    //                 }
    //             </div>)}
    //         </React.Fragment>
    //     )
    // }

    const generateTicketGrids = () => {
        for (let i=0; i< ticketCount; i++){
            return (
                <div className='singleGrid'>{generateSingleGrid()}</div>
            )
        }
    }
 
 
  return (
    <div className='displayTicketsContainer'>
        {
            totalGrids.map(grid => <div className='singleGrid'>
            { grid.map(row => <div className='eachRow'>
                {
                    row.map(col => <div className='eachColumn'>{col}</div>)
                }
                <br/>
            </div>)}
        </div> )
        }
            
      
    </div>
  )
}

export default DisplayTickets
