import { randomUUID } from 'crypto'
import placeholderShow from '../../../assets/placeholder.png'

const showData = [
  {
    id: randomUUID(),
    name: 'Friends',
    seasonEpisode: 'S04E10',
    thumbnail: placeholderShow,
    progress: 50,
    isFirst: true,
  },
  {
    id: randomUUID(),
    name: 'How I Met Your Mother',
    seasonEpisode: 'S01E02',
    thumbnail: placeholderShow,
    progress: 10,
    isFirst: false,
  },
  {
    id: randomUUID(),
    name: 'Breaking Bad',
    seasonEpisode: 'S06E70',
    thumbnail: placeholderShow,
    progress: 97,
    isFirst: false,
  },
  {
    id: randomUUID(),
    name: 'Rick and Morty',
    seasonEpisode: 'S03E20',
    thumbnail: placeholderShow,
    progress: 7,
    isFirst: false,
  },
  {
    id: randomUUID(),
    name: 'One Piece',
    seasonEpisode: 'S26E40',
    thumbnail: placeholderShow,
    progress: 50,
    isFirst: false,
  },
  {
    id: randomUUID(),
    name: 'Two and a Half Man',
    seasonEpisode: 'S07E20',
    thumbnail: placeholderShow,
    progress: 99,
    isFirst: false,
  },
  {
    id: randomUUID(),
    name: 'Everybody hates Chris',
    seasonEpisode: 'S03E09',
    thumbnail: placeholderShow,
    progress: 20,
    isFirst: false,
  },
]

export default showData
