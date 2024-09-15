import React, { useState } from "react"
import { sports } from "../../dummyData"

import Card from "../home/hero/Card"

import Popular from "../home/mainContent/popular/Popular"
import Ppost from "../home/mainContent/Ppost/Ppost"




const Sports = () => {
    const [items, setIems] = useState(sports)
  return (
    <>
    <section className='hero'>
      <div className='container'>
        {items.map((item) => {
          return (
            <>
              <Card key={item.id} item={item} />
            </>
          )
        })}
      </div>
      
    </section>
    <Popular/>
    <Ppost/>
    
  </>
  )
}

export default Sports
