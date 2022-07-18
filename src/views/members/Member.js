import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
const Member = () => {
  const submitState = useSelector(state=>state.dropDownData.selected)

  useEffect(()=>{
      console.log("submitstatechanged call api member page",submitState.name)
  },[submitState])
  return (
    <>
      <h1>This is a Memeber Page</h1>
    </>
  )
}

export default Member