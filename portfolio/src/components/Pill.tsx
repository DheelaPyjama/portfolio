import React from 'react'

type PillType = {
  width: number
  text: string
  icon?: React.ReactNode
  bgColor: string
}

function Pill({ width, text, icon, bgColor }: PillType) {
  return (
    <div
      className={`flex p-2 items-center justify-center w-min shadow-md border-2 rounded-full w-[${width}] ${bgColor}`}
    >
      {text}
    </div>
  )
}

export default Pill
