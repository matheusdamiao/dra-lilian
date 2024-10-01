import React, { ReactNode, SVGProps } from 'react'
import zap from './../icons/whatsapp.svg'

interface ButtonProps{
    children: React.ReactNode
    backgroundColor: string
}


const ButtonCTA: React.FC<ButtonProps> = ({backgroundColor, children}) => {
  return (
    <div style={{backgroundColor}} className='px-6 py-3 flex items-center gap-4 z-50' >
      <img src={zap} />
      {children}
    </div>
  )
}

export default ButtonCTA
