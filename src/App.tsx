import { Suspense } from "react";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Technologies from "./component/Technologies";
import type { technologyMainType } from "./types/mainType";



const promiseData=async ():Promise<technologyMainType[]>=>{
    const res = await fetch("/data.json");
    const data = res.json();
    return data;
}




function App() {

  


  return (
    <div className="bg-base-200 font-roboto">
        <Nav />
        <Hero />

        <Suspense fallback={<p>Loading........</p>}>
            <Technologies promiseData={promiseData()} />
        </Suspense>
         
    </div>
  )
}

export default App
