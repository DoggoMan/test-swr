import React from 'react'
import { Link } from 'react-navi'

const Layout = () => {
  return (
    <>
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        <Link style={{ margin: '20px' }} href={'/'}>
          Home
        </Link>
        <Link style={{ margin: '20px' }} href={'/summary'}>
          Summary
        </Link>
        <Link style={{ margin: '20px' }} href={'/random'}>
          Random pokemon!
        </Link>
      </div>
      <br />
      <br />
    </>
  )
}

export default Layout
