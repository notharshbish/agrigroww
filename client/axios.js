import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io'
})

export default instance