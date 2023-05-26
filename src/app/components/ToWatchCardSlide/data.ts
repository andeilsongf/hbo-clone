import { randomUUID } from 'crypto'
import tomAndJerry from '../../../assets/card-1.png'
import gossipGirl from '../../../assets/card-2.png'

const showDataCard = [
  {
    id: randomUUID(),
    name: 'Tom and Jerry',
    thumbnail: tomAndJerry,
  },
  {
    id: randomUUID(),
    name: 'Gossip Girl',
    thumbnail: gossipGirl,
  },
  {
    id: randomUUID(),
    name: 'Tom and Jerry',
    thumbnail: tomAndJerry,
  },
]

export default showDataCard
