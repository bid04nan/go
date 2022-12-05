import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Header from '../components/Header'
import { GlobalStyle } from '../components/styles/GlobalStyles'
import PackageSlider from '../components/PackageSlider'
import Footer from '../components/Footer'
const AllPackages = ({heading}) => {
const data = useStaticQuery(graphql`
query AllPackageQuery {
  allPackagesJson {
    edges {
      node {
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        button
        id
        name
        packagename
        startingPrice
      }
    }
  }
}
`)

function getPackages(data){
     return <PackageSlider entries = {data.allPackagesJson.edges} />
}

  return (
    <PackageContainer>
      <GlobalStyle />
      <Header/>
      <PackageHeading>Our Packages</PackageHeading>
      <PackageWrapper>{getPackages(data)}</PackageWrapper>
      <Footer/>
      </PackageContainer>
  )
}

export default AllPackages

const PackageContainer = styled.div`
  min-height: 100vh;
   padding: 5rem calc((100vh - 1300px) / 2);
  color: #fff;
  background:black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`
const PackageHeading = styled.div`
font-size: clamp(1.4rem,2vw,3rem);
margin: 40px;
color: white;
font-weight: bolder;
font-family: Brushstroke;
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