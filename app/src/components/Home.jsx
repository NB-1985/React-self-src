import React,{useState} from 'react'
import Header from './Header'
import "../Home.css"
// import Props from './Props'
// import { N } from './Props'
const Home = () => {

    const [inputvalue, setInputvalue] = useState(0)


    const Increment=()=>{
        setInputvalue(inputvalue+1);
    }
    
    const Decrement=()=>{
        setInputvalue(inputvalue-1);

    }

  return (
    <>
    <div >
      <Header />
    </div>
    {/* <Props name="Mahadev" price="899899" id='har har mahadev' />
    <N prices="04061977"/><br/><hr/> */}
    <input type="text" value={inputvalue} readOnly  /> 
    {/* readOnly or onchange event listner is compolsary in above mentioned line */}
    <button onClick={Increment} > +</button>
    <button onClick={Decrement}> -</button>
    </>

  )
}

export default Home