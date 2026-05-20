function FindRide() {
  return (
    <div>

      <h1>Find Ride</h1>

      <input style={{ padding: "10px", marginBottom: "5px", borderRadius: "5px", width: "300px" }}
        type="search"
        placeholder="Search rides"
      />

      <br /><br />
      <button style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "blue", color: "white" }}>
        search
      </button>

      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <h3>Noida → Delhi</h3>
        <p>Price: ₹150</p>
      </div>

      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <h3>Delhi → Jaipur</h3>
        <p>Price: ₹500</p>
      </div>

    </div>
  );
}

export default FindRide;