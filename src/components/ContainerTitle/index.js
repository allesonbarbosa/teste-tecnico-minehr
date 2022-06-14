import React from 'react'

import Filter from '../../assets/filter.png'

import {ContainerTitle, H1, P, FilterButton} from './styles'

function Title(){
    return(
        <ContainerTitle>
            <H1>Dashboard</H1>
            <P>Desafio Técnico Frontend</P>
            <FilterButton> <img alt="logo-filtro" src={Filter} /> Filtrar </FilterButton>
        </ContainerTitle>
    )
}

export default Title