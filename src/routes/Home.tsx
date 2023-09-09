import { UserProps } from "../types/user"
import Search from "../components/Search"
import { useState } from 'react'
import axios from "axios"


function Home() {

  const [user, setUser] = useState< UserProps | null >(null) 

  const loadUser = async (userName: string) => {
    const axios = require('axios')
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    const data = await response.data
    setUser(data)
    console.log(data)
  }

  return (
    <div>
      <Search loadUser = { loadUser} />
    </div>
  )
}

export default Home