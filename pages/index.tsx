import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const[alphabet,setAlphabet]=useState('VT')
  useEffect(()=>{
    
  },[])
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>
       {alphabet}
     </h1>

     
    </div>
  )
}

export default Home
