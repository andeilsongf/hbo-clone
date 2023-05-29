import React from 'react'

type ButtonProps = {
  title: string
  backgroundColor?: string
}

export default function Button({ title, backgroundColor }: ButtonProps) {
  return (
    <button
      className="z-10 h-[45px] w-[210px] rounded-full"
      style={{
        background: backgroundColor,
      }}
    >
      <span className="text-base font-bold uppercase text-white">{title}</span>
    </button>
  )
}
