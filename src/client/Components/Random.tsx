import useSWR, { mutate } from 'swr'
import React from 'react'
import Loading from './Loading'
import { localFetcher } from './Api'

const Random = (): React.ReactElement => {
  const { data } = useSWR('/api/pokemon', localFetcher)
  // ...

  return (
    <>
      {data && <p>{JSON.stringify(data.pokemons, null, 2)}</p>}
      {!data && <Loading />}
      <button
        onClick={async (): Promise<void> => {
          if (!data || !data.pokemons) {
            console.log(`Aborting - no pokemons ready.`)
            return
          }
          console.log(data)
          // const newPokemon = (data.pokemons as Array<any>).slice(1)
          const newPokemon: object[] = []
          console.log(newPokemon)

          // send a request to the API to update the data
          // await requestUpdateUsername(newName)

          // localFetcher('api/pokemon')

          // update the local data immediately and revalidate (refetch)
          mutate('/api/pokemon', { ...data, pokemons: newPokemon }, true)

          console.log(`Updated local state\n`, data)
        }}
      >
        Release the pokemon!
      </button>
    </>
  )
}

export default Random
