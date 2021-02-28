import React, { useEffect } from 'react'
//import React from 'react'
import axios from 'axios'

export default function AxiosCall01() {

  console.log ("In AxiosCall01")

  const mydata = []

  React.useEffect(() => {

    axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
      mydata = res.data
      //console.log(mydata)
      //console.log(res.data)
    })

    console.log("In AxiosCall01 again")

  });

  //console.log(mydata)

  /* from AxiosFunction01
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

  */


  /* this code did not seem to work
  const mydata = axios.get('http://jsonplaceholder.typicode.com/users')
  console.log ("In AxiosCall01")
  console.log(mydata)
  return mydata;
  */

}