import { useState } from 'react';
import Header from './components/Header';
import TicketCard from './components/TicketCard';
import './App.css';

function App() {
  const [numTickets, setNumTickets] = useState(1);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setNumTickets(Math.max(0, value));
  };

  return (
    <div className="app">
      <Header />
      
      <div className="controls">
        <label htmlFor="tickets">Número de pasajes:</label>
        <input
          id="tickets"
          type="number"
          value={numTickets}
          onChange={handleInputChange}
          min="0"
        />
      </div>

      <TicketCard numTickets={numTickets} />
    </div>
  );
}

export default App;
