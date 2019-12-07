import { request } from 'graphql-request'
import axios from 'axios'
import { Variables } from 'graphql-request/dist/src/types'

const API = 'https://graphql-pokemon.now.sh/'
export const externalFetcher = (query: string, variables?: Variables) =>
  request(API, query, variables)
export const localFetcher = (endpoint: string) =>
  axios.get(endpoint).then(r => r.data)

export const swrConfig = {
  refreshInterval: 30000,
  fetcher: localFetcher,
  revalidateOnFocus: false,
}
