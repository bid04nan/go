import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel';


const DestinationSlider = ({entries}) => {
    const waterfalls=[];
    const caves=[];
    const scenicspots=[];
    const trekking=[];
    entries.forEach((elem)=>{
        console.log(elem.node.type);
    if (elem.node.type === "waterfalls"){
        waterfalls.push(elem);
    }
    else if (elem.node.type === "caves"){
        caves.push(elem);
    }
    else if (elem.node.type === "Scenic Spot"){
        scenicspots.push(elem);
    }
    else{
        trekking.push(elem)
    }
});
    const [width,setWidth] = useState(0);
    const carousel =useRef();

    useEffect(()=>{
        console.log(carousel)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetParent.offsetWidth);
    }, []);
    function getcarouselimg(elem){
        const CarosuelImageArray =[]
        elem.node.img.forEach((element, ind) => { 
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
      function getentries(entries){
        return(
            <Carosuel>
            <motion.div ref={carousel} className='Carosuel' whileTap={{cursor:'grabbing'}}>
                <motion.div className='Innercarosuel' drag='x' 
                dragConstraints={{right:0, left:-width}}>
                {entries.map((elem,index) => {
                    return(
                    <motion.div className='Item' key={index} >
                        
                        <CarouselB>
                {getcarouselimg(elem)} 
                </CarouselB>
              <CarouselDetails>
                    <CarosuelName to={`/DestinationDetails/${elem.node.destinationName}`}>{elem.node.destinationName}</CarosuelName>
              </CarouselDetails>
              </motion.div>
                    );
        })
                    }
                    
                </motion.div>
        
            </motion.div>
            </Carosuel>
        )}
      
  return (

    <DestinationDiv>
        <DestinationHeading>Best Waterfalls</DestinationHeading>
        {getentries(waterfalls)}
        <DestinationHeading>Best Caves</DestinationHeading>
        {getentries(caves)}
        <DestinationHeading>Best Scenic Spots</DestinationHeading>
        {getentries(scenicspots)}
        <DestinationHeading>Best Trekking</DestinationHeading>
        {getentries(trekking)}
    </DestinationDiv>
  )
}

export default DestinationSlider
const Carosuel = styled.div`
.Carosuel{
    height: 340px;
    width: 70rem;
cursor:pointer;
overflow: hidden;
.Innercarosuel{
    display: flex;
    .Item{
        height: 15rem;
        min-width: 15rem;
        padding: 15px;
        display: flex;
flex-direction: column;
align-items: center;
        @media(max-width:768px){
            height: 12rem;
    width: 12rem;
    padding: 12px;
        }
        @media(max-width:425px){
            height: 8rem;
    width: 8rem;
    padding: 8px;
    }
      }
        }
        @media(max-width:1024px){
            width:60rem;
                }
        @media(max-width:768px){
            width:42rem;
                }
        @media(max-width:425px){
            width:24rem;
                }
        @media(max-width:375px){
    width:18rem;
        }
    
}
`
const CarouselDetails = styled.div`
display: flex;
justify-content: space-between;
    align-items: center;

`
const CarosuelName = styled(Link)`
text-decoration: none;
color: white;
font-size: 15px;
padding: 5px 0px;
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
&:hover{
    transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
`
const DestinationDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
row-gap: 30px;
`
const DestinationHeading = styled.div`
font-size: 30px;
font-weight: bolder;
font-style: italic;
`
