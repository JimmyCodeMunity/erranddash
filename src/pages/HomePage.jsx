import React from 'react'
import AppLayout from '../layout/AppLayout'
import Dash from '../components/Dash'

const HomePage = () => {
  const pagetitle = 'Dashboard'
  return (
    <div>
      <AppLayout pagetitle={pagetitle}>
        <Dash/>
      </AppLayout>
    </div>
  )
}

export default HomePage
