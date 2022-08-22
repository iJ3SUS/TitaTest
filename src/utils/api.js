import axios from 'axios'


const http = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/'
})

http.defaults.headers.common['app-id'] = '630174af1fe185125734d25e'

export default http