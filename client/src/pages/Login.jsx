function Login() {
  return (
    <div>
      <h1>Login</h1>

      <input style={{padding: "10px", marginBottom: "10px",borderRadius: "5px"}} placeholder="Email" />

      <br />

      <input style={{padding: "10px", marginBottom: "10px",borderRadius: "5px"}} placeholder="Password" />

      <br />

      <button style ={{padding: "10px 20px",borderRadius: "5px",backgroundColor: "blue",color: "white"}}>Login</button>
    </div>
  );
}
export default Login;