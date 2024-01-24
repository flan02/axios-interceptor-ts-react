import axios from "axios"


export const testingService = () => {
  return axios.get('https://rickandmortyapi.com/api/character/1')
}