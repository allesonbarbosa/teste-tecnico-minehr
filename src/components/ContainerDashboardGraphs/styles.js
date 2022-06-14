import styled from 'styled-components'

export const ContainerDashboardGraphs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 28px;
    margin-top: 45px;
    margin-left: 28px;
`
export const ContainerGraph = styled.div`
    width: 680px;
    height: 359px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    #bar-chart{
        padding-left: 39px;
    }
    #scatter-chart{
        padding-left: 50px;
    }
`
export const ContainerTitleGraph = styled.div`
    display: flex;
    flex-direction: row;
    .logo-info{
        margin-left: 15.9px;
        margin-top: 23.19px;
        width: 15.63px;
        height: 15.63px;
        cursor:pointer;
    }
    .logo-hamburger-menu{
        margin-left: 500.25px;
        margin-top: 25.38px;
        width: 21.88px;
        height: 19.25px;
        cursor:pointer;
    }
`
export const H2 = styled.h2`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #5D405C;
    padding-top: 21px;
    padding-left: 23px;
`