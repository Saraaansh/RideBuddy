function CreateRide() {
  return (
    <div>

      <h1>Create Ride</h1>

      <input
        type="text"
        placeholder="Pickup Location"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Destination"
      />

      <br /><br />

      <input
        type="number"
        placeholder="Price"
      />

      <br /><br />

      <button>Create Ride</button>

    </div>
  );
}

export default CreateRide;