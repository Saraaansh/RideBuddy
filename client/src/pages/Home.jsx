import RideCard from "../components/RideCard";
function Home(){
    return(
        <section>
            <h1 style={{textAlign: "center",padding:"20px"}}>Available Rides</h1>
            <div style={{display:"flex", gap: "20px", marginTop: "20px"}}>   
                <RideCard city="Delhi → Noida" price="300" driver="Raj" car="Swift" rating="4.5" />
                <RideCard city="Delhi → Gurgaon" price="450" driver="Nischal" car="Honda City" rating="4.7" />
                <RideCard city="Noida → Faridabad" price="500" driver="Praveen" car="Toyota Innova" rating="4.8" />
            </div>
            
        </section>
           
    )
}
export default Home;