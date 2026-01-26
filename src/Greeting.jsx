function Greeting({name, topic}){
    return(
        <div style={{border: '1px solid blue',margin:'10px',padding:'10px'}}>
            <h3>Hello, {name}!</h3>
            <p>Welcome to day 4 of your {topic} journey</p>
        </div>
    )
}
export default Greeting