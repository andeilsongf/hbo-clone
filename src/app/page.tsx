'use client'

import Image from 'next/image'
import { ChevronRight, ListMinus, Play, Search } from 'lucide-react'

import logoSvg from '../assets/logo.svg'
import hboMaxOriginalLogo from '../assets/hbo-max-original-logo.svg'
import malePicture from '../assets/male.jpg'
import logoFeatured from '../assets/header-featured-tv-show-logo.png'
import featureTvShowImage from '../assets/header-featured-tv-show.webp'
import gossipGirl from '../assets/gossip-girl.png'

import Button from './components/Button'
import ToWatchSlide from './components/ToWatchSlide'
import ToWatchCardSlide from './components/ToWatchCardSlide'
import { useEffect, useState } from 'react'

import GenerateProgress from './services/generateProgress'

import { MovieDTO } from '@/dtos/MovieDTO'
import { TVShowDTO } from '@/dtos/TVShowDTO'
import api from './services/api'
import { ActorDTO } from '@/dtos/ActorDTO'
import StarPower from './components/StarPower'

export default function Home() {
  const [topMovies, setTopMovies] = useState<MovieDTO[]>([])
  const [trendings, setTrending] = useState<MovieDTO[]>([])
  const [airToday, setAiringToday] = useState<TVShowDTO[]>([])
  const [topTvShows, setTopTvShows] = useState<TVShowDTO[]>([])
  const [actors, setActors] = useState<ActorDTO[]>([])
  const [fantasiesMovies, setFantasiesMovies] = useState<MovieDTO[]>([])

  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH

  useEffect(() => {
    async function fetchAiringToday() {
      try {
        const response = await api.get('/tv/airing_today?language=en-US&page=1')
        setAiringToday(response.data.results)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('Loaded')
      }
    }

    fetchAiringToday()
  }, [])

  useEffect(() => {
    async function fetchTrendingAll() {
      try {
        const response = await api.get('/trending/all/day?language=en-US')
        setTrending(response.data.results)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('Loaded')
      }
    }

    fetchTrendingAll()
  }, [])

  useEffect(() => {
    async function fetchTopMovies() {
      try {
        const response = await api.get('/movie/top_rated?language=en-US&page=1')
        console.log(response.data.results)
        setTopMovies(response.data.results)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('Loaded')
      }
    }

    fetchTopMovies()
  }, [])

  useEffect(() => {
    async function fetchTopTvShows() {
      try {
        const response = await api.get('/tv/top_rated?language=en-US&page=1')
        console.log(response.data.results)
        setTopTvShows(response.data.results)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('Loaded')
      }
    }

    fetchTopTvShows()
  }, [])

  useEffect(() => {
    async function fetchActors() {
      try {
        const response = await api.get('/person/popular?language=en-US&page=1')
        console.log(response.data.results)
        setActors(response.data.results)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('Loaded')
      }
    }

    fetchActors()
  }, [])

  useEffect(() => {
    async function fetchFantasyMovies() {
      try {
        const response = await api.get(
          '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14',
        )
        console.log(response.data.results)
        setFantasiesMovies(response.data.results)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('Loaded')
      }
    }

    fetchFantasyMovies()
  }, [])

  return (
    <main className="flex w-full flex-col overflow-y-auto">
      <header className="absolute z-10 flex w-full flex-row items-center justify-between px-16 py-6 ">
        <div className="flex gap-12">
          <ListMinus color="#fff" />
          <Search color="#fff" />
        </div>
        <Image src={logoSvg} width={130} alt="HBO Logo" />
        <div className="flex items-center gap-2">
          <Image
            src={malePicture}
            width={40}
            height={40}
            alt="Picture"
            className="rounded-full border-[3px] border-white"
          />
          <span className="text-base font-bold text-white">Andeilson</span>
        </div>
      </header>
      <div className="relative w-full">
        <Image
          src={featureTvShowImage}
          alt="Friends Cover"
          className="w-full"
        />
        <div className="absolute bottom-14 px-16 py-14">
          <Image
            src={logoFeatured}
            width={330}
            alt="Logo Friends"
            className="mb-9"
          />
          <h2 className="text-base font-bold uppercase text-white">
            NOW PLAYING
          </h2>
          <span className="text-base text-white">
            They are back in Central Perk. For one night only.
          </span>
          <div className="mt-4 flex items-center gap-5">
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-alt">
              <Play color="#fff" size={20} strokeWidth="3" />
            </button>
            <Button
              title="More info"
              backgroundColor="rgba(255, 255, 255, .2)"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-blacker px-16 py-14">
        <span className="mb-8 flex items-center gap-4">
          <h3 className="text-lg font-bold text-white">Continue Watching</h3>
          <ChevronRight color="#fff" size={10} />
        </span>
        <div className="z-10 flex w-full gap-4 overflow-hidden">
          {airToday.map((tvshow) => (
            <ToWatchSlide
              name={tvshow.name}
              thumbnail={`${imagePath}${tvshow.poster_path}`}
              key={tvshow.id}
              progress={GenerateProgress()}
              isPrimarySection={true}
            />
          ))}
        </div>
      </div>

      <div className="relative flex flex-col bg-blacker px-16 py-14">
        <div className="bg-purple-top bottom-0 overflow-hidden" />
        <div className="bg-purple-mid bottom-0 overflow-hidden" />
        <div className="bg-purple-bottom bottom-0 overflow-hidden" />
        <span className="z-10 mb-8 flex items-center gap-4">
          <h3 className="text-lg font-bold text-white">New and Treding</h3>
          <ChevronRight color="#fff" size={10} />
        </span>
        <div className="z-10 flex w-full gap-4 overflow-hidden">
          {trendings.map((trending) => (
            <ToWatchCardSlide
              name={trending.name}
              image={`${imagePath}${trending.poster_path}`}
              key={trending.id}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col bg-blacker px-16 py-14">
        <span className="z-10 mb-8 flex items-center gap-4">
          <h3 className="text-lg font-bold text-white">Movies we love</h3>
          <ChevronRight color="#fff" size={10} />
        </span>
        <div className="z-10 flex w-full gap-4 overflow-hidden">
          {topMovies.map((movie) => (
            <ToWatchSlide
              name={movie.title}
              width={200}
              height={300}
              thumbnail={`${imagePath}${movie.poster_path}`}
              key={movie.id}
              isPrimarySection={false}
            />
          ))}
        </div>
      </div>

      <div className="relative flex items-center bg-blacker px-16 py-14">
        <div className="bg-purple-top bottom-0 overflow-hidden" />
        <div className="bg-purple-mid bottom-0 overflow-hidden" />
        <div className="bg-purple-bottom bottom-0 overflow-hidden" />
        <span className="z-10 mb-8 flex flex-col">
          <h3 className="mb-3 text-xl font-bold text-white">
            Essential Series
          </h3>
          <span className="mb-6 w-[380px] text-base text-white">
            Your favorite shows, beloved characters, and unforgettable stories.
          </span>
          <Button
            title="BROWSE ALL"
            backgroundColor="linear-gradient(90.36deg, #4710C1 3.28%, #7857FF 50.58%, #819BFD 96.22%)"
          />
        </span>
        <div className="z-10 flex w-full gap-4 overflow-hidden">
          {topTvShows.map((topTvShow) => (
            <ToWatchSlide
              width={200}
              height={300}
              thumbnail={`${imagePath}${topTvShow.poster_path}`}
              key={topTvShow.id}
              isPrimarySection={false}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col bg-blacker px-16 py-14">
        <span className="z-10 mb-8 flex items-center gap-4">
          <h3 className="text-lg font-bold text-white">Star power</h3>
          <ChevronRight color="#fff" size={10} />
        </span>
        <div className="z-10 flex w-full gap-4 overflow-hidden">
          {actors.map((actor) => (
            <StarPower
              actorImg={`${imagePath}${actor.profile_path}`}
              key={actor.id}
              name={actor.name}
            />
          ))}
        </div>
      </div>

      <div className="relative flex flex-col bg-blacker px-16 py-14">
        <div className="bg-purple-top bottom-0 overflow-hidden" />
        <div className="bg-purple-mid bottom-0 overflow-hidden" />
        <div className="bg-purple-bottom bottom-0 right-full overflow-hidden" />
        <span className="z-10 mb-8 flex items-center gap-4">
          <h3 className="text-lg font-bold text-white">
            Harry Potter and Other Fantastic Universes
          </h3>
          <ChevronRight color="#fff" size={10} />
        </span>
        <div className="z-10 flex w-full gap-4 overflow-hidden">
          {fantasiesMovies.map((fantasyMovie) => (
            <ToWatchSlide
              width={200}
              height={300}
              thumbnail={`${imagePath}${fantasyMovie.poster_path}`}
              key={fantasyMovie.id}
              isPrimarySection={false}
            />
          ))}
        </div>
      </div>

      <div className="relative flex items-center bg-blacker px-16 py-14">
        <div className="bg-purple-top bottom-0 overflow-hidden" />
        <div className="bg-purple-mid bottom-0 overflow-hidden" />
        <div className="bg-purple-bottom bottom-0 overflow-hidden" />
        <div className="z-10 m-auto flex max-w-5xl flex-col gap-2">
          <div className="flex gap-2">
            <Image
              src={hboMaxOriginalLogo}
              width={60}
              height={26}
              alt="HBO Original Logo"
            />
            <span className="text-base font-bold uppercase text-white/[.3]">
              Gossip Girl: The bad Witch
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-4 text-xl font-bold capitalize text-white">
              Hello Again, Upper East Riders.
            </h3>
            <span className="text-base text-white">
              Your one and only source into the scandalous <br /> lives of
              Manhattan&apos;s elite is back, with a new cast.
            </span>
          </div>
        </div>
        <div>
          <Image
            alt="Gossip Girl"
            className="relative z-10"
            src={gossipGirl}
            width={360}
            height={360}
          />
        </div>
      </div>
    </main>
  )
}
