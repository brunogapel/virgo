import axios from 'axios'

export const MARVEL_API_PARAMS = {
  ts: `1`,
  apikey: `e8b37197f3f20792e75c332f1f157648`,
  hash: `d8171cc6e2643dd08179789861cda101`,
  limit: `1`
}

export const HTTP = axios.create({
  baseUrl: `https://gateway.marvel.com:443/v1/public/`
  /*
  headers: {
    Authorization: 'Bearer {token}'
  } */
})
