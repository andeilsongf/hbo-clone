'use client'

import Image from 'next/image'
import logoSvg from '../../assets/logo.svg'
import UserCircle from '../components/UserCircle'
import Button from '../components/Button'

import johnSnow from '../../assets/male.jpg'

export default function User() {
  return (
    <main className="relative flex h-screen max-h-screen w-full flex-col overflow-hidden bg-black">
      <div className="bg-purple-top"></div>
      <div className="bg-purple-mid"></div>
      <div className="bg-purple-bottom"></div>
      <section className="z-10 flex h-screen w-full flex-col items-center justify-between py-10">
        <div className="flex flex-col items-center">
          <Image src={logoSvg} width={130} alt="HBO Logo" className="mb-8" />
          <h1 className="text-2xl text-white">Who is Watching?</h1>
        </div>

        <div className="flex gap-20">
          <UserCircle key={1} name="Andeilson" image={johnSnow.src} />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-8">
            <Button title="Adult" backgroundColor="rgba(255, 255, 255, .2)" />
            <Button title="Kid" backgroundColor="rgba(255, 255, 255, .2)" />
          </div>
          <span className="mt-8 text-base font-bold text-purple">
            MANAGE PROFILES
          </span>
        </div>
      </section>
    </main>
  )
}
