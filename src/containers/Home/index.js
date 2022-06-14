import React from 'react'

import DashboardGraphs from '../../components/ContainerDashboardGraphs'
import ContainerTitle from '../../components/ContainerTitle'
import Header from '../../components/Header'
import { Container } from './styles'

function Home() {
  return (
    <Container>
      <Header />
      <ContainerTitle />
      <DashboardGraphs />
    </Container>
  )
}

export default Home
