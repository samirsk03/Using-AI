import React from 'react'
import { Link } from 'react-router-dom'

const MainHome = () => {
  return (
      <>
      <div className="m-4 p-4 flex gap-4">
      <Link
        to='/chatbot'
        >AI Chat Bot
        </Link>
   
        <Link
        to='/afifacare'
        >Afifa Care
        </Link>

        <Link
        to='/PlutoPe'
        >PlutoPe
        </Link>
        </div>
    </>
  )
}

export default MainHome