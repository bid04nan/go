import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Header from '../components/Header'
import { GlobalStyle } from '../components/styles/GlobalStyles'
import DestinationSlider from '../components/DestinationSlider'
import Footer from '../components/Footer'

const AllDestinations = ({heading}) => {
const data = useStaticQuery(graphql`
query AllDestinationQuery {
    allDestinationJson {
    edges {
        node {
          destinationName
          overview
          type
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }

`)

function getDestinations(data){
return <DestinationSlider entries = {data.allDestinationJson.edges} />
}

  return (
    <PackageContainer>
       <GlobalStyle />
       <Header/>
      <PackageHeading>Destinations</PackageHeading>
      <PackageWrapper>{getDestinations(data)}</PackageWrapper>
      <Footer/>
      </PackageContainer>
  )
}

export default AllDestinations
const PackageContainer = styled.div`
  min-height: 100vh;
  padding: 1rem calc((100vh - 1300px) / 2);
  color: #fff;
  background:black;
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const PackageHeading = styled.div`
font-size: clamp(1.4rem,2vw,3rem);
margin: 70px;
color: white;
font-weight: bolder;
font-family: Brushstroke;
margin-top: 100px;
text-align: center;
`
const PackageWrapper = styled.div`
justify-items: center;
padding: 0 2rem;
margin: 0 8%;
overflow:hidden;

@media(max-width:425px){
  padding: 0px 1rem;
margin: 0px 6%;
}
`