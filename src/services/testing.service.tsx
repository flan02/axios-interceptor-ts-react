import axios from "axios"


export const testingService = () => {
  return axios.get('https://asdrickandmortyapi.com/api/character/1')
}