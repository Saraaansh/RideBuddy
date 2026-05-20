/*
function App() {
  const rides = [
    {
      source: "Delhi",
      destination: "Noida",
      price: 300,
    },
    {
      source: "Delhi",
      destination: "Gurgaon",
      price: 450,
    },
    {
      source: "Noida",
      destination: "Faridabad",
      price: 500,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-black text-white p-5 flex justify-between">
        <h1 className="text-2xl font-bold">
          RideApp 🚖
        </h1>

        <div className="flex gap-5">
          <p>Home</p>
          <p>Login</p>
          <p>Create Ride</p>
        </div>
      </nav>

      <section className="text-center py-16 px-5">
        <h1 className="text-black md:text-6xl font-bold">
          Book Rides Easily 🚀
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Fast, affordable and comfortable rides.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition">
            Book Ride
          </button>

          <button className="border border-black px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

    
      <section className="px-5 pb-10">
        <h2 className="text-3xl font-bold mb-8">
          Available Rides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rides.map((ride) => (
            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold">
                {ride.source} → {ride.destination}
              </h3>

              <p className="mt-3 text-gray-600">
                Price: ₹{ride.price}
              </p>

              <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg">
                Ride Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
*/

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [rides, setRides] = useState([]);

  const fetchRides = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/rides"
      );

      setRides(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE FUNCTION
  const deleteRide = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/ride/${id}`
      );

      // Refresh rides after delete
      fetchRides();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Available Rides 🚖</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {rides.map((ride) => (
          <div
            key={ride._id}
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "220px",
              borderRadius: "10px",
            }}
          >
            <h2>
              {ride.source} → {ride.destination}
            </h2>

            <p>Price: ₹{ride.price}</p>

            <p>Seats: {ride.seats}</p>

            <button
              onClick={() => deleteRide(ride._id)}
              style={{
                marginTop: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              Delete Ride
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;