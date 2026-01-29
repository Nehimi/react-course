// ContactCard.jsx
function ContactCard({ name, phone, label }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
    <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{name}</h2>
      <p style={{ margin: '0', color: '#666' }}>📞 {phone}</p>
      <span style={{
        fontSize: '12px',
        backgroundColor: label === 'Work' ? '#72bee1' : '#b38335',
        padding: '2px 8px',
        borderRadius: '5px',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        {label}
      </span>
    </div>
  );
}

export default ContactCard;