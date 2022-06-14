import React from 'react'

import Info from '../../assets/info.png'
import HamburgerMenu from '../../assets/hamburger-menu.png'

import BarGraph from '../BarGraph'
import ScatterGraph from '../ScatterGraph'

import {ContainerDashboardGraphs, 
    ContainerTitleGraph, 
    H2, 
    ContainerGraph}
    from './styles'

function DashboardGraphs(){
    return(
        <ContainerDashboardGraphs>
        <ContainerGraph>
          <ContainerTitleGraph>
            <H2>Barras</H2>
            <img className="logo-info" alt="logo-info" src={Info} />
            <img className="logo-hamburger-menu" alt="logo-hamburger-menu" src={HamburgerMenu} />
          </ContainerTitleGraph>
          <BarGraph />
        </ContainerGraph>
        <ContainerGraph>
          <ContainerTitleGraph>
            <H2>Scatter</H2>
            <img className="logo-info" alt="logo-info" src={Info} />
            <img className="logo-hamburger-menu" alt="logo-hamburger-menu" src={HamburgerMenu} />
          </ContainerTitleGraph>
          <ScatterGraph />
        </ContainerGraph>
      </ContainerDashboardGraphs>
    )
}

export default DashboardGraphs