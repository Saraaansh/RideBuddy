function Ridecard(props){
    return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        width: "220px",
      }}
    >
      <h2>{props.city}</h2>

      <p>Price: ₹{props.price}</p>

      <p>Driver: {props.driver}</p>

      <p>Car: {props.car}</p>

      <p>Rating: ⭐ {props.rating}</p>

      <button style={{
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "green",
        borderRadius: "10px",
      }}>Book Ride</button>
    </div>
  );
}
export default Ridecard;