import React, { FC, Suspense, useEffect } from 'react'
import { mount, route, lazy } from 'navi'
import { Router as BrowserRouter, View } from 'react-navi'
import Helmet from 'react-navi-helmet-async'
import { checkAndWriteSessionStorage } from '../Common/functions'
import Loading from './Loading'
import Home from './Home'
import { swrConfig } from './Api'
import { SWRConfig } from 'swr'

const routes = mount({
  '/': route({
    title: 'Homepage',
    view: <Home />,
  }),
  '/summary': lazy(() =>
    route({
      title: 'Summary',
      getView: async () => import('./summary'),
    })
  ),
  '/random': lazy(() =>
    route({
      title: 'Random pokemon',
      getView: async () => import('./Random'),
    })
  ),
})

const setInitialdata = (): void => {
  checkAndWriteSessionStorage('identity', JSON.stringify({ self: 'fakeAdmin' }))
}

const Router: FC = () => {
  useEffect(() => {
    setInitialdata()
  })
  return (
    <Helmet>
      <BrowserRouter routes={routes}>
        <Suspense fallback={Loading}>
          <SWRConfig value={swrConfig}>
            <View />
          </SWRConfig>
        </Suspense>
      </BrowserRouter>
    </Helmet>
  )
}

export default Router
