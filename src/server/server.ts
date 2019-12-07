import { request } from 'graphql-request'
import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import history from 'koa2-connect-history-api-fallback'
import { join } from 'path'
import delay from 'delay'

const API = 'https://graphql-pokemon.now.sh/'

const getTen = `{
  pokemons (first: 10) {
    id
    name
    image
  }
}`

const apiRoute = process.env.API_ROUTE
const app = new Koa()
const router = new Router({ prefix: apiRoute })

router.get('/pokemon', async ctx => {
  try {
    console.log(`Fetching pokemon...`)
    await delay(5000)
    const res = await request(API, getTen)
    ctx.body = res
    ctx.status = 200
    console.log(`Got pokemon, sending res ${JSON.stringify(res)}`)
  } catch (err) {
    console.log(err)
    ctx.status = 500
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(history({ whiteList: ['/api'] }))

if (process.env.NODE_ENV === 'production') {
  app.use(serve(join(__dirname, '../client-build')))
}

app.listen(5000)
