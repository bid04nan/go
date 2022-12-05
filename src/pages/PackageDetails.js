import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import { graphql} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { ImLocation } from "react-icons/im";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ContactForm from '../components/ContactForm'
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import { GlobalStyle } from '../components/styles/GlobalStyles';
import Footer from '../components/Footer';

export default function PackageDetails  ({data})  {
    const [OpenContact, setContact] = useState(false)   
 
function getPackageDetails(data){
    
  const packageDetailArray = []
  data.allPackageDetailsJson.edges.forEach((item, index) => {
    
    packageDetailArray.push(
      <PackageDetailCard key = {index} >
        {/* <CarosuelB showThumbs={false}>
         {getcarouselimg(item)} 
    </CarosuelB> */}
    <Carousel>
    {getcarouselimg(item)} 
  
  {/* <CCarouselItem>
    <CImage className="d-block w-100" src="/images/vue.jpg" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="/images/angular.jpg" alt="slide 3" />
  </CCarouselItem> */}
</Carousel>
    <PackageDetailInfo>
    <ImLocation />
    {item.node.locations.map((elem) => (
    elem
  )).join(',')}
        </PackageDetailInfo>
        <PackageDetailInfo>  
        <PackageDetailInfoHeading>
          Overview
        </PackageDetailInfoHeading>
        <PackageDetailInfoBody>
          {item.node.overview}
        </PackageDetailInfoBody>
        </PackageDetailInfo>
        <PackageDetailInfo>
        <PackageDetailInfoHeading>
          Itenary Details
        </PackageDetailInfoHeading>
        {getitenarydetail(item)} 
        </PackageDetailInfo>
        <PackageDetailEnquiry>
        <ButtonB primary="true" 
          round="true" onClick={() => {setContact(true);}} >enquire Now</ButtonB>
          
        </PackageDetailEnquiry>
        
        </PackageDetailCard>
     ) 
    })
  
  return packageDetailArray
    }
  function getcarouselimg(item){
    const CarosuelImageArray =[]
    item.node.img.forEach((element, ind) => { 
      const src= element.childImageSharp.fluid.src;
      CarosuelImageArray.push(
    //   <div key = {ind}>
    //   <PackageDetailImg 
    //     style={{ height: "35%", width: "100%" }}
    //     imgStyle={{ objectFit: "cover" }}
    //   src={src}
    //   fluid={element.childImageSharp.fluid}
    //   />
    //   </div>
    <Carousel.Item key={ind} >
          <CarouselImg src={src}
       fluid={element.childImageSharp.fluid}  />
  </Carousel.Item>
      )
  })
  return CarosuelImageArray
}
function getitenarydetail(item){
  const ItenarydetailArray =[]
  item.node.description.forEach((element, ind) => { 
    ItenarydetailArray.push(
    <PackageDetailDescription key = {ind}>
      <ItenaryDay>Day-{ind}:</ItenaryDay><ItenaryDetail>{element}</ItenaryDetail>
    </PackageDetailDescription>
    )
})
return ItenarydetailArray
}

  return (
    <PackageDetailContainer>
      <GlobalStyle />
      <Header/>
      <ToastContainer/>
      <PackageDetailHeading>{window.location.pathname.split("/")[2]}</PackageDetailHeading>
      <PackageDetailWrapper>{getPackageDetails(data)}</PackageDetailWrapper>
      {OpenContact && <ContactForm closeContact={setContact} packgname={data.allPackageDetailsJson.edges[0].node.packagename}/>}
      <Footer/>
      </PackageDetailContainer>
      
  )
}
export const query = graphql`
query PackageDetailQuery($PackageID: String) {
  allPackageDetailsJson(filter: {name: {eq: $PackageID}}) {
    edges {
      node {
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        overview
        packagename
        description
        amenitiesincluded
        locations
      }
    }
  }
}
`



const PackageDetailContainer = styled.div`
min-height: 100vh;
  padding: 1rem calc((100vh - 1300px) / 2);
  color: white;
  background:black;
  display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const PackageDetailHeading = styled.div`
font-size: clamp(1.4rem,2vw,3rem);
margin-bottom: 1rem;
color: white;
font-weight: bolder;
font-family: Brushstroke;
text-align:center;
margin-top: 100px;
`
const PackageDetailWrapper = styled.div`
height: 100%;
    // width: 100%;
    
`
const CarouselImg =  styled.img`
 width: 100%;
display: inline-block;
pointer-events: none;
height: 500px;
`
const PackageDetailCard = styled.div`
width: 80%;
    float: none;
    margin: 0 auto;
`

const PackageDetailInfo = styled.div`
border-radius: 11px;
    border: black solid 1px;
    padding: 14px;
    margin-top: 16px;
    background: white;
    color:black;
`

const PackageDetailInfoHeading = styled.div`
text-align: center;
    margin-bottom: 9px;
    background: white;
    color:black;
    `
const PackageDetailInfoBody = styled.div``

const PackageDetailDescription = styled.div`
border: 1px solid black;
    border-radius: 5px;
    padding: 9px;
    margin-top: 5px;
    margin-bottom: 5px;
    display:flex; 
    flex-direction:row;
    justify-content: space-around;
    column-gap: 30px;
    align-items: center;    
    background: white;
    color:black;
`
const ItenaryDay = styled.div`

text-align: center;
background-image: linear-gradient(to right, yellow, white);
width: fit-content;
font-style: italic;
font-family: initial;
font-weight: bolder;
color:black;
`
const ItenaryDetail = styled.div`
background: white;
color:black;
`
const ButtonB = styled.button`
background: ${({ primary }) => (primary ? '#F26A2E' : '#077BF1')};
white-space: nowrap;
padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
color: #fff;
font-size: ${({ big }) => (big ? '18px' : '14px')};
outline: none;
border: none;
min-width: 100px;
cursor: pointer;
text-decoration: none;
transition: 0.3s !important;
border-radius: ${({ round }) => (round ? '50px' : 'none')};

&:hover {
    background: ${({ primary }) => (primary ?  '#077BF1' : '#F26A2E')}; 
    transform: translateY(-2px);
}
}
`
const PackageDetailEnquiry = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 5px 5px;
`