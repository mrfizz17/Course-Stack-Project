import Nav from "./component/Nav";


const FetchData=async ()=>{
    const res = await fetch("/data.json");
    const data = res.json ();
    return data;
}




function App() {

  const promiseData = FetchData();


  return (
    <>
        <Nav />
    </>
  )
}

export default App
