
import './App.css';
import DisplayBoard from './Components/DisplayBoard';
import DisplayTickets from './Components/DisplayTickets';
import InputTicketCount from './Components/InputTicketCount';
import TambolaProvider from './Context/TambolaProvider';

function App() {
  return (
    <div className="App">
      <TambolaProvider>
        <InputTicketCount/>
        <DisplayBoard/>
        <DisplayTickets/>
      </TambolaProvider>
     Tambola Game
    </div>
  );
}

export default App;
