import React,{useState} from 'react'
import { memes } from "../dummyData"
import "./Memes.css"
import Card from "../components/home/hero/Card"

import Ppost from '../components/home/mainContent/Ppost/Ppost'
import Music from '../components/home/mainContent/musics/Music'
import Life from '../components/home/mainContent/life/Life'
const Memes = () => {
    const [items, setIems] = useState(memes)
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
    <Life/>
    <Music />   
    <Ppost/>
  </>
  )
}

export default Memes
