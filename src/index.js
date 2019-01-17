import React from 'react'
import * as Sentry from '@sentry/browser'
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import './styles/App.css'
import './styles/index.css'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://def76a2b2849416aa29bbcb82c41ed3e@sentry.dev01d.com/2'
  })
}

ReactDOM.render(<AppRouter id="page-wrap" />, document.getElementById('app'))
