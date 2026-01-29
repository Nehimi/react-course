// App.jsx
import ContactCard from './ContactCard';
import Header from './Header';
function App() {
  return (
    <>

      <Header />

      <main style={{ maxWidth: '500px', margin: '0 auto' }}>
        <ContactCard name="Nehimi" phone="0964174098" label="Work" />
        <ContactCard name="Test User" phone="123456" label="Personal" />
      </main>
    </>
  );
}

export default App;