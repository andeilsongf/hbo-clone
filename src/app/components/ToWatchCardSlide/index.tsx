import Image from 'next/image'

type CardSlideProps = {
  name: string
  image: string
}

export default function ToWatchCardSlide({ name, image }: CardSlideProps) {
  return (
    <Image
      src={image}
      width={310}
      height={310}
      alt={name}
      style={{
        minHeight: 310,
        minWidth: 310,
      }}
      priority
    />
  )
}
