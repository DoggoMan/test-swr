import React from 'react'
import { Link } from 'react-navi'

const Home = (): React.ReactElement => {
  return (
    <>
      <div style={{ padding: '1% 3%' }}>Welcome to Test site!</div>
      <Link href={'/summary'}>Summary</Link>
    </>
  )
}

export default Home
