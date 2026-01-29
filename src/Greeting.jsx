function Greeting({name, topic,status}){
    return(
        <div style={{border: '1px solid #ddd',padding:'10px',margin:'10px'}}>
            <h3>Hello, {name}!</h3>
            <p>Welcome to day 4 of your {topic} journey</p>
            {/* Displaying the 3rd prop */}
            <p>Status: <strong>{status}</strong></p>
        </div>
    )
}
export default Greeting