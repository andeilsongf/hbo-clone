import { randomUUID } from 'crypto'
import avatarMale from '../../assets/male.jpg'
import avatarFemale from '../../assets/female.jpg'

const userDATA = [
  {
    id: randomUUID(),
    image: avatarMale,
    name: 'Andeilson',
    gender: 'Male',
  },
  {
    id: randomUUID(),
    image: avatarFemale,
    name: 'Giovanna',
    gender: 'Female',
  },
]

export default userDATA
