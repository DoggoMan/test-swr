import Dexie from 'dexie'
import React from 'react'
import { render } from 'react-dom'
import Router from './Components/Router'

export const db = new Dexie('documents')

db.version(1).stores({
  documents: 'id, blob',
})

render(<Router />, document.querySelector('#root'))
