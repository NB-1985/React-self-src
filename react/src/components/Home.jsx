import React from 'react'
import { useEffect } from 'react'
import Product from './Product'

const Home = () => {
    // const arr=[1,2,3,4,5,6]
    const api="https://hn.algolia.com/api/v1/search?query=html"

   const fetchapi= async(url)=> {
    try {
      const res=await (url)
      const data=await res.json();
      console.log(data)
      
    } catch (error) {
      console.log(error)
      
    }

   }


    useEffect(() => {
       fetchapi(api)
    }, [])
    

  return (
    <>
    <div>
      {/* {
        arr.map( (i)=>(
          <Product value={i} key={i}/>
        ))
      }
       */}
       {Home}
      
      


    </div>
    </>
  )
}

export default Home