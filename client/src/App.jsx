import Navbar from "./components/Navbar";
import Ridecard from "./components/Ridecard";
import Footer from "./components/footer";

/*function App() {

  return (
    <div>
      <Navbar />

      <section
        style={{
          padding: "30px",
        }}
      >
        <h1>Available Rides 🚖</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Ridecard city="Delhi → Noida" price="300" driver="Raj" car="Swift" rating="4.5" />

          <Ridecard city="Delhi → Gurgaon" price="450" driver="Nischal" car="Honda City" rating="4.7" />

          <Ridecard city="Noida → Faridabad" price="500" driver="Praveen" car="Toyota Innova" rating="4.8" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;*/
/*
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); count is a state variable that holds the current count value, and setCount is a function that allows us to update the count. The initial value of count is set to 0.

  return (
    <div>
      <h1>{count}</h1> 

      <button onClick={() => setCount(count + 1)}> When the button is clicked, the onClick event handler is triggered, which calls the setCount function with the new value of count (current count + 1). This updates the count state variable, causing the component to re-render and display the updated count value.
        Increase
      </button>
    </div>
  );
}

export default App; 
*/
/*
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Login Form</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)} on change 
      />

      <p>Hello {name}</p>
    </div>
  );
}

export default App;
*/
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h1>Login Form 🔐</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "10px",
          width: "100%",
          borderRadius: "10px",
        }}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "10px",
          width: "100%",
          borderRadius: "10px",
        }}
      />

      <button
        style={{
          padding: "10px 20px",
        }}
      >
        Login
      </button>

      <hr />

      <h2>Entered Data</h2>

      <p>Name: {name}</p>

      <p>Email: {email}</p>
    </div>
  );
}

export default App;