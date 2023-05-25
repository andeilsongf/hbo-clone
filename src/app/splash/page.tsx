import Image from 'next/image'
import logoSvg from '../../assets/logo.svg'

export default function Splash() {
  return (
    <main className="flex h-screen items-center justify-center bg-blue-alt">
      <Image src={logoSvg} alt="HBO Logo" />
    </main>
  )
}
