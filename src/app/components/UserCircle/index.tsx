import Image from 'next/image'
import React from 'react'

type userProps = {
  name: string
  image: string
}

export default function UserCircle({ name, image }: userProps) {
  return (
    <div className="flex h-[165px] w-[165px] cursor-pointer flex-col items-center justify-center space-y-5 rounded-full">
      <Image
        src={image}
        alt={`${name} Picture`}
        className="rounded-full border-[6px] border-solid border-white"
        width={165}
        height={165}
      />
      <span className="text-base text-white">{name}</span>
    </div>
  )
}
