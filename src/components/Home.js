import React from 'react'
import Habits from './Habits'
import AddHabit from './AddHabit'

const Home = () => {
  return (
    <>
      <AddHabit name="Detail View"/>
      <Habits/>
    </>
  )
}

export default Home
