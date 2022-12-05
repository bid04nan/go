import React from 'react'
import styled from "styled-components";
import {useStaticQuery, graphql} from 'gatsby'
import { AiFillStar } from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';
const Testimonial = ({heading}) => {
      const data = useStaticQuery(graphql`
      query TestimonialQuery {
          allTestimonialsJson (limit: 4) {
              edges {
                node {
                  alt
                  id
                  msg
                  rating
                  name
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
    return (
      <TestimonialContainer>
          <TestimonialHeading>{heading}</TestimonialHeading>
          <TestimonialDetailContainer>
        <TestimonialWrapper>
        <TestimonialCard>
        <CarouselB>
          {getTestimonials(data)}
          </CarouselB>
          </TestimonialCard>
        </TestimonialWrapper>
        </TestimonialDetailContainer>
      </TestimonialContainer>
    );
  };
  
  function getTestimonials(data){
              const TestimonialArray = []
              data.allTestimonialsJson.edges.forEach((item, index) => {
                  TestimonialArray.push(
                    <Carousel.Item key={index}>
                    <ImageWrapper>
                <Avatar
                src={item.node.img.childImageSharp.fluid.src}
                alt={item.node.alt} 
                fluid={item.node.img.childImageSharp.fluid} 
                
                /></ImageWrapper>
                <TestimonialBody>
                    <TestimonialName>
                    {item.node.name}
                    <RatingAvailable>
                    {Array.from({length: `${item.node.rating}`}, (_, i) => i + 1).map((elementInArray, index) => ( 
                    <AiFillStar  key={index} style={{ color: "gold"}}/>
                    ) 
                )}
                   </RatingAvailable>
                    </TestimonialName>
                    <TestimonialMsg>
                        <q>
                    {item.node.msg}</q>
                    </TestimonialMsg>
                </TestimonialBody>
                </Carousel.Item>
    );
    
            })
            return TestimonialArray
        }
  
  export default Testimonial;
 
  const TestimonialContainer = styled.div`
  min-height: 100vh;
  padding: 1rem calc((100vh - 1300px) / 2);
   color: #fff;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background:black;
  `
  const TestimonialDetailContainer = styled.div`
  min-height: 100vh;
  padding: 1rem calc((100vh - 1300px) / 2);
   color: #fff;
   display: flex;
   justify-content: center;
   @media (max-width: 669px){
      width  :100%;
      }
   `
  const TestimonialWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  row-gap:20px;
  width: 80%;
  `
  const TestimonialCard = styled.div`
  border: 1px solid black;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-column-gap: 10px;
  column-gap: 10px;
  -webkit-box-pack: space-around;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  align-items: center;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 9px;
  padding: 20px;
  background: white;
  @media (max-width: 669px){
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-row-gap: 10px;
      row-gap: 10px;
  }
  `
  const RatingAvailable = styled.div``
  const TestimonialHeading = styled.div`
  font-size: clamp(1.4rem,2vw,3rem);
margin: 40px;
color: white;
font-weight: bolder;
font-family: Brushstroke;
text-align: center;
  `
  const TestimonialBody = styled.div`
  display :flex;
  flex-direction: column;
  row-gap:10px;
  color:black;
  justify-content: center;
align-items: center;

  `
  const TestimonialName = styled.div`
  font-size: 20px;
  font-weight: bolder;
  font-variant: all-small-caps;
  font-family: Brushstroke;
  font-feature-settings: revert-layer;
  text-decoration: underline;
    text-decoration-color: currentcolor;
  text-decoration-color: red;
  `
  const TestimonialMsg = styled.div`
  font-size: 15px;
  font-family: Georgia, serif;
  @media (max-width: 669px){
  padding: 10px;
  font-size: 12 px;
  }
  `
  const Avatar = styled.img`
  position: relative;
  overflow: hidden;
  height: 132px;
  width: 140px;
  border-radius: 50%;
  overflow: hidden;
  `
  const ImageWrapper =  styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
display: inline-block;
width: 16%;
@media (max-width: 768px){
  width: 25%;
 }
@media (max-width: 425px){
         width: 60%;
        }

  `
const CarouselB = styled(Carousel)`
// img {
//   width: 16%;
//     @media (max-width: 800px){
//       width: 25%;
//       }
//       @media (max-width: 600px){
//         width: 30%;
//         }
//         @media (max-width: 410px){
//           width: 50%;
//           }
// }
`