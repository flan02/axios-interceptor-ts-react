import axios from "axios"


export const testingService = () => {
  return axios.get('https://asdasdrickandmortyapi.com/api/character/1')
}