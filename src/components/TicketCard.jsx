const TicketCard = ({ numTickets }) => {
  const destination = "Pucón";
  const pricePerTicket = 12000; // $12.000
  const total = pricePerTicket * numTickets;

  // Using a public image URL for the destination (e.g., volcano in Pucon)
  const imageUrl = "https://picsum.photos/id/1015/400/300"; // Random landscape, replace if needed

  return (
    <div className="ticket-card">
      <img 
        src={imageUrl} 
        alt={`Vista de ${destination}`} 
        className="destination-image"
      />
      <div className="ticket-details">
        <h2>Destino: {destination}</h2>
        <p>Precio por pasaje: ${pricePerTicket.toLocaleString('es-CL')}</p>
        <p>Pasajes: {numTickets}</p>
        <p className="total">Total a pagar: ${total.toLocaleString('es-CL')}</p>
      </div>
    </div>
  );
};

export default TicketCard;
