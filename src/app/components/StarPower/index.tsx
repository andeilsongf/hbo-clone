import Image from 'next/image'

type StarPowerProps = {
  name: string
  actorImg: string
}

export default function StarPower({ name, actorImg }: StarPowerProps) {
  return (
    <div className="relative flex w-full min-w-[280px] flex-col">
      <Image
        width={280}
        height={420}
        src={actorImg}
        alt={name}
        className="relative"
      />
      <div className="absolute bottom-6 left-2 flex flex-col">
        <span className="text-base uppercase tracking-wide text-white">
          featuring
        </span>
        <h1 className="text-lg font-bold uppercase tracking-wide text-golden">
          {name}
        </h1>
      </div>
    </div>
  )
}
