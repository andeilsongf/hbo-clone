import { v4 as uuidv4 } from 'uuid'
import placeholderShow from '../../../assets/placeholder.png'

const showData = [
  [
    {
      id: uuidv4().toString(),
      name: 'Friends',
      seasonEpisode: 'S04E10',
      thumbnail: placeholderShow,
      progress: 50,
      isFirst: true,
    },
  ],
]

export default showData
