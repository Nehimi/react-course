// App.jsx
import ContactCard from './ContactCard';

function App() {
  return (
    <>
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>My Contacts</h1>
        <p>Week 1 Practice Project</p>
      </header>

      <main style={{ maxWidth: '500px', margin: '0 auto' }}>
        <ContactCard name="Nehimi" phone="0964174098" label="Work" />
        <ContactCard name="Test User" phone="123456" label="Personal" />
      </main>
    </>
  );
}

export default App;