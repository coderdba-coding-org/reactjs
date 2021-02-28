import React, { useState } from 'react'
import axios from 'axios'

export default function AxiosFunction01() {
  const [mydata, setMyData] = useState([])

  const apicall = () => {
    axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
      setMyData(res.data)
      //alert ("hello")
      console.log(mydata)
    })
  }

  return (
    <div>
      <h1> Hello Axios Function</h1>
      <button onClick={apicall}> Click Me </button>
    </div>
  )
}