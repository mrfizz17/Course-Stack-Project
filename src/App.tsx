import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Technologies from "./component/Technologies";


const FetchData=async ()=>{
    const res = await fetch("/data.json");
    const data = res.json ();
    return data;
}




function App() {

  const promiseData = FetchData();


  return (
    <div className="bg-base-200 font-roboto">
        <Nav />
        <Hero />
        
    </div>
  )
}

export default App
