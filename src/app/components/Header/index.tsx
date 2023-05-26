import Image from 'next/image'
import logoSvg from '../../../assets/logo.svg'
import { ListMinus } from 'lucide'

export default function Header() {
  return (
    <header>
      <div>
        <ListMinus color="#fff" />
      </div>
      <Image src={logoSvg} alt="HBO Logo" width={130} />
    </header>
  )
}
