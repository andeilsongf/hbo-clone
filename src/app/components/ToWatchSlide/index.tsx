import Image from 'next/image'
import React from 'react'

type toWatchProps = {
  name?: string
  width?: number
  height?: number
  seasonEpisode?: string
  thumbnail: string
  progress?: number
  isPrimarySection?: boolean
  isFirst?: boolean
}

export default function ToWatchSlide({
  name,
  width = 200,
  height = 200,
  seasonEpisode,
  thumbnail,
  progress,
  isPrimarySection,
  isFirst,
  ...rest
}: toWatchProps) {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src={thumbnail}
          width={width}
          height={height}
          alt="Title"
          className="w-full"
          style={{
            minHeight: height,
            objectFit: 'cover',
          }}
        />
        {isFirst || !isPrimarySection ? null : (
          <span className="absolute bottom-4 left-2 h-2 w-11/12 rounded-full bg-white/[.2]">
            <span
              className="absolute h-2 rounded-full bg-blue-alt"
              style={{
                width: `${progress}%`,
              }}
            ></span>
          </span>
        )}
      </div>
      {isPrimarySection ? (
        <div className="mt-2 flex flex-col gap-2">
          {isFirst ? (
            <span className="text-xs font-bold text-gray-200">
              YOUR NEXT EPISODE
            </span>
          ) : null}
          <span className="text-sm text-white">{name}</span>
          <span className="text-sm text-gray-200">{seasonEpisode}</span>
        </div>
      ) : null}
    </div>
  )
}
