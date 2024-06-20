import Navbar from "./Navbar"
import Newsboard from "./Newsboard"
import React, { useState } from 'react'

const Livenews = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
        <Navbar setCategory={setCategory}/>
        <Newsboard category={category}/>
    </div>
  )
}

export default Livenews