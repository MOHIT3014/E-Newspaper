import React, { useState } from "react"
import { politics } from "../../dummyData"
import  "./Politics.css"
import Card from "../home/hero/Card"

import Popular from "../home/mainContent/popular/Popular"

const Politics = () => {
    const [items, setIems] = useState(politics)
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
  </>
  )
}

export default Politics;
