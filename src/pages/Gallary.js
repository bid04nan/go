import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import { GlobalStyle } from '../components/styles/GlobalStyles';
import {useStaticQuery, graphql} from 'gatsby'
import GallaryImage from "../components/GallaryImage"
import Footer from '../components/Footer';
const Gallary = () => {
  const data = useStaticQuery(graphql`
  query allGallaryImage {
    allGallaryImagesJson {
   edges {
        node {
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
  const [model, setModel] = useState(false);
  const [tempimgSrc, setImgSrc]=useState('');
  const getImage = (imgsrc) =>{
    setImgSrc(imgsrc);
    setModel(true);
  }
function getGallaryImage(data){
  const gallayImageArray = []
  data.allGallaryImagesJson.edges.forEach((item, index) => {
    item.node.img.forEach((image, imageindex) => {
    gallayImageArray.push(
      <GallaryImages src={image.childImageSharp.fluid.src} 
      fluid={image.childImageSharp.fluid}  key={imageindex} onClick={() => getImage(image.childImageSharp.fluid.src)}>
          </GallaryImages>
  ) 
    })
})

return gallayImageArray
}
  return (
    <GallaryContainer>
      <GlobalStyle/>
      <Header/>
      <GallaryHeading>Our Gallary</GallaryHeading>
      <GallareyWrapper>
      {getGallaryImage(data)}</GallareyWrapper>
      {model && <GallaryImage closeContact={setModel} imgsrc={tempimgSrc}/>}
      <Footer/>
    </GallaryContainer>
  ) 
  }
export default Gallary
const GallaryContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vh - 1300px) / 2);
color: #fff;
background:black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const GallareyWrapper = styled.div`
-webkit-column-count:3;
-moz-column-count: 3;
column-count:3;
-moz-column-width: 33%;
-webkit-column-width: 33%;
column-width:33%;
padding:0 12px;
margin-top: 80px;

@media (max-width: 991px){
  -webkit-column-count:2;
-moz-column-count: 2;
column-count:2;
}
@media (max-width: 480px){
  -webkit-column-count:1;
-moz-column-count: 1;
column-count:1;
-moz-column-width: 100%;
-webkit-column-width: 100%;
column-width:100%;
}
`
const GallaryImages = styled.img`
width: 100%;
-webkit-transition: all 350ms ease;
transition: all 350ms ease;
cursor: pointer;
margin-bottom:12px;

&:hover {
  filter: opacity(.8);
}
`


const GallaryHeading = styled.div`
font-size: clamp(1.4rem,2vw,3rem);
margin: 40px;
color: white;
font-weight: bolder;
font-family: Brushstroke;
text-align: center;
`
