import React from 'react'

import Header from '../../components/Header'
import ContainerTitle from '../../components/ContainerTitle'
import DashboardGraphs from '../../components/ContainerDashboardGraphs'

import {
  Container,
} from './styles'

function Home() {
  return (
    <Container>
      <Header />
      <ContainerTitle/>
      <DashboardGraphs/>
    </Container>
  )
}

export default Home