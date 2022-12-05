import React from 'react'
import styled from 'styled-components'
import { graphql} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Header from '../components/Header';
import { GlobalStyle } from '../components/styles/GlobalStyles';
import SimilarPackageSlider from '../components/SimilarPackageSlider';
import Footer from '../components/Footer';

export default function DestinationDetails  ({data})  {
   

 
function getDestinationDetails(data){
    
  const destinationDetailArray = []
  data.allDestinationJson.edges.forEach((item, index) => {
    
    destinationDetailArray.push(
      <DesatinationDetailCard key = {index} >
      <DestinationDetailThumbnsil>
      {getcarouselimg(item)}
        {/* <LeftImage src={item.node.img[0].childImageSharp.fluid.src} alt="" 
        fluid={item.node.img[0].childImageSharp.fluid}
        /> */}
      </DestinationDetailThumbnsil>
      <RightDestinationDetailTitle>
        <h1>{window.location.pathname.split("/")[2]}</h1>
        <DestinationDetailAuthor>
          {item.node.type}
        </DestinationDetailAuthor>
        <Separator />
        <p>{item.node.overview}</p>
      </RightDestinationDetailTitle>
    </DesatinationDetailCard>
    ) 
  })
  
  return destinationDetailArray
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
    <DesatinationDetailContainer>
      <GlobalStyle />
      <Header/>
      <DesatinationDetailHeading>{window.location.pathname.split("/")[2]}</DesatinationDetailHeading>
      <DesatinationDetailWrapper>{getDestinationDetails(data)}</DesatinationDetailWrapper>
      <DestinationDetailsPackageDetails>
        <SimilarPackageHeading>Packages Including {window.location.pathname.split("/")[2]}</SimilarPackageHeading>
        <SimilarPackageSlider Destinationname={window.location.pathname.split("/")[2]} />
      </DestinationDetailsPackageDetails>
      <Footer/>
      </DesatinationDetailContainer>
      
  )
}
export const query = graphql`
query DestinationDetailQuery($DestinationName: String) {
    allDestinationJson(filter: {destinationName: {eq: $DestinationName}}) {
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
`



const DesatinationDetailContainer = styled(Row)`
display: flex;
min-height: 100vh;
justify-content: center;
--bs-gutter-x: 0rem;
background:black; 
  
`
const SimilarPackageHeading =styled.div`
color: white;
font-size: 20px;
font-weight: 900;
margin: 15px;
`
const DestinationDetailsPackageDetails = styled.div`
justify-items: center;
padding: 0 10rem;
margin: 0 8%;
overflow:hidden;
align-items:center;
display: flex;
flex-direction: column;
@media(max-width:425px){
  padding: 0px 1rem;
margin: 0px 6%;
}
`
const DesatinationDetailHeading = styled.div`
font-size: clamp(1.4rem,2vw,3rem);
margin-bottom: 1rem;
color: white;
font-weight: bolder;
font-family: Brushstroke;
text-align:center;
margin-top: 100px;
`
const DesatinationDetailWrapper = styled.div`
height: 100%;
width: 88%;
    
`
const CarouselImg =  styled.img`
width: 100%;
display: inline-block;
pointer-events: none;
height: 500px;
`
const DesatinationDetailCard = styled.div`
position: relative;
height: 450px;
width: 900px;
margin: 50px auto;
background-color: #fff;
box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
border-radius: 1em;
`
const DestinationDetailThumbnsil = styled(Carousel )`
float: left;
position: relative;
left: 30px;
top: -30px;
width: 50%;
height: inherit;
box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
overflow: hidden;
border-radius: 1em;
`

const RightDestinationDetailTitle = styled.div`
margin-left: 500px;
margin-right: 20px;
`
const DestinationDetailAuthor = styled.div`
background-color: #9ecaff;
height: 30px;
width: 110px;
border-radius: 20px;
display: flex;
align-content: center;
justify-content: center;
padding: 5px 0px;
font-size:1rem;
`
const Separator = styled.div`
margin-top: 10px;
border: 1px solid #c3c3c3;
`