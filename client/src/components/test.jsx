function Test(){
    const rides =["Delhi","Mumbai","Bangalore","Chennai","Kolkata"];
    return(
        <div>
            <h1>Available Rides</h1>

            {rides.map((ride)=> (
                <p>{ride}</p>
            ))}
        </div>
    )
}
export default Test