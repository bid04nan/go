import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Carousel from 'react-bootstrap/Carousel';
import {AiOutlineArrowRight} from "react-icons/ai"
const Destinations = ({heading}) => {
const data = useStaticQuery(graphql`
query DestinationQuery {
    allDestinationJson (limit: 5){
    edges {
        node {
          destinationName
          overview
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
  const destinationsArray = []
  data.allDestinationJson.edges.forEach((item, index) => {
    destinationsArray.push(
      <PackageCard key = {index} href={`/DestinationDetails/${item.node.destinationName}`}>
        <CarouselB>
        {getcarouselimg(item)} 
        </CarouselB>
        <PackageInfo>
          <PackageName>{item.node.destinationName}</PackageName>
        </PackageInfo>
      </PackageCard>
    )
  })
  
  return destinationsArray
}
function getcarouselimg(item){
  const CarosuelImageArray =[]
  item.node.img.forEach((element, ind) => { 
    const src= element.childImageSharp.fluid.src;
    CarosuelImageArray.push(
  <Carousel.Item key={ind} >
        <CarouselImg src={src}
     fluid={element.childImageSharp.fluid}  />
</Carousel.Item>
    )
})
return CarosuelImageArray
}

  return (
    <PackageContainer>
      <PackageHeading>{heading}</PackageHeading>
      <PackageWrapper>{getDestinations(data)}</PackageWrapper>
      <PackageViewMore>
      <ViewMore to="/AllDestinations">View More<AiOutlineArrowRight/></ViewMore></PackageViewMore>
      </PackageContainer>
  )
}

export default Destinations
const PackageContainer = styled.div`
  min-height: 100vh;
  padding: 1rem calc((100vh - 1300px) / 2);
  color: #fff;
  background:black;
  display: flex;
flex-direction: column;
justify-content: space-between;
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
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 10px;
justify-items: center;
padding: 0 2rem;
@media screen and (max-width:1024px){
  grid-template-columns:repeat(4, 1fr);
}
@media screen and (max-width:768px){
  grid-template-columns:repeat(3, 1fr);
}
@media screen and (max-width:425px){
  grid-template-columns:1fr;
}


`
const PackageCard = styled.a`
line-height: 2;
width: 14rem;
height: 20rem;
position: relative;
border-radius: 10px;
transition: 0.2s ease;
cursor: pointer;
`
const CarouselImg = styled.img`
width: 100%;
display: inline-block;
pointer-events: none;
height: 300px;
`
const CarouselB = styled(Carousel)`
.carousel-control-prev-icon,.carousel-control-next-icon {
  display: none;
}
.carousel-indicators{
  display:none;
}
`
const PackageInfo = styled.div`
opacity: 0;
font-size: 40px;
position: absolute;
top: 0;
left: 0;
color: #1c87c9;
background-color: rgba(200, 200, 200, 0.5);
width: 100%;
height: 300px;
-webkit-transition: all 400ms ease-out;
-moz-transition: all 400ms ease-out;
-o-transition: all 400ms ease-out;
-ms-transition: all 400ms ease-out;
transition: all 400ms ease-out;
text-align: center;

&:hover{
  opacity: 1;
  
}
`
const PackageName = styled.div`
height: 0;
opacity: 1;
position:relative;
top:230px;
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
