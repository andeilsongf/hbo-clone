import Image from 'next/image'

type CardSlideProps = {
  name: string
  image: string
}

export default function ToWatchCardSlide({ name, image }: CardSlideProps) {
  return (
    <div>
      <Image
        src={image}
        width={550}
        height={310}
        alt={name}
        style={{
          minHeight: 310,
          minWidth: 550,
        }}
      />
    </div>
  )
}
