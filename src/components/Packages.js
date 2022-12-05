import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import { Link } from "gatsby"
import PackageSlider from './PackageSlider'
import {AiOutlineArrowRight} from "react-icons/ai"
const Packages = ({heading}) => {
const data = useStaticQuery(graphql`
query PackageQuery {
  allPackagesJson(limit: 5) {
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
      <PackageHeading>{heading}</PackageHeading>
      
      <PackageWrapper>{getPackages(data)}</PackageWrapper>
      <PackageViewMore>
      <ViewMore to="/AllPackages">View More<AiOutlineArrowRight/></ViewMore></PackageViewMore>
      </PackageContainer>
  )
}

export default Packages

const PackageContainer = styled.div`
  min-height: 100vh;
  padding: 1rem calc((100vh - 1300px) / 2);
  color: #fff;
  background:black;
  display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
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
margin: 0 8%;
overflow:hidden;

@media(max-width:425px){
  padding: 0px 1rem;
margin: 0px 6%;
}
`
const PackageViewMore = styled.div`
width: -moz-available;
width: -webkit-available;
display: flex;
flex-direction: row;
justify-content: right;
text-decoration: none;
color: white;
padding: 0px 100px;
`
const ViewMore = styled(Link)`
text-decoration: none;
color: white;
&:hover{
  transform: scale(1.1);
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
svg{
  font-size: 40px;
border: 1px solid white;
border-radius: 50%;
background: white;
color: black;
}
`

