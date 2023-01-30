import React from 'react'

const Props = ({name,price,id}) => {
  return (
    <div>
      {name}<br/>
      <hr/>
      {price}
      <br/>
      <hr/>
      
      {id} 
      <hr/>
    </div>
  )
}

const N=({id,prices})=>{
  return(
    <>
      {id}{prices}
    </>
  )
}
export {N}
export default Props