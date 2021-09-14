import React, {useState} from 'react'
import Led from './components/Led'

export default function App() {

  const [ligado, setLigado] = useState(false) 

  const cancelar=(obj)=>{
    return obj.preventDefault()
  }

  return(
    <>
      <Led ligado={ligado} setLigado={setLigado}/>
      <a
        href='https://instagram.com/pamelabadermann'
        rel='noreferrer'
        target='_blank'
        onClick={(e)=>cancelar(e)}  
      >
        Insta
      </a>
    </>
  )
}