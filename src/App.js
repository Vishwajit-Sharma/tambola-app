
import './App.css';
import DisplayBoard from './Components/DisplayBoard';
import DisplayTickets from './Components/DisplayTickets';
import GameControl from './Components/GameControl';
import InputTicketCount from './Components/InputTicketCount';
import TambolaProvider from './Context/TambolaProvider';

function App() {


  return (
    <div className="App">
      <h1 align="center">Tambola Game</h1>
      <TambolaProvider>
        <InputTicketCount/>
        <GameControl/>
        <DisplayBoard/>
        <DisplayTickets/>
      </TambolaProvider>
     
    </div>
  );
}

export default App;
