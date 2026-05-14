function Navbar(){
  return (
    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"15px",
      backgroundColor:"black",
      color:"white"
    }}>
      <h2>Ride app 🚖</h2>
      <ul style={{
        listStyle:"none",
        display:"flex",
        gap:"20px"
      }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>

      </ul>
    </nav>
  )
}

export default Navbar