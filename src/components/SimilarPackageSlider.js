import React from 'react'
import {motion } from 'framer-motion'
import {useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiRupee } from "react-icons/bi"
import { Link } from 'gatsby'

import {useStaticQuery, graphql} from 'gatsby'
const SimilarPackageSlider = ({Destinationname}) => {
    const data = useStaticQuery(graphql`
query SimlilarPackageQuery {
  allPackagesJson{
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
        locations
        name
        packagename
        startingPrice
      }
    }
  }
}
`)
const similardata =[]
data.allPackagesJson.edges.forEach(elem => {
    if (elem.node.locations.includes(Destinationname)){
        similardata.push(elem);
    }
});
const [width,setWidth] = useState(0);
const carousel =useRef();

useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetParent.offsetWidth);
}, []);
return (
<Carosuel>
<motion.div ref={carousel} className='Carosuel' whileTap={{cursor:'grabbing'}}>
    <motion.div className='Innercarosuel' drag='x' 
    dragConstraints={{right:0, left:-width}}>
    {similardata.map((elem,index) => {
        console.log(elem);
        return(
        <motion.div className='Item' key={index}>
            
            <CarosuelImage 
            src={elem.node.img.childImageSharp.fluid.src} 
    alt={elem.node.alt} 
    fluid={elem.node.img.childImageSharp.fluid}
  />
  <CarouselDetails>
    <CarosuelInfo>
        <CarosuelName>{elem.node.packagename}-{elem.node.name}</CarosuelName>
        <CarosuelPrice><BiRupee />{elem.node.startingPrice}</CarosuelPrice></CarosuelInfo>
    <CarosuelButton to={`/PackageDetails/${elem.node.name}`}>Details</CarosuelButton>
  </CarouselDetails>
  </motion.div>
        );
})
        }
        
    </motion.div>

</motion.div>
</Carosuel>
)
}

export default SimilarPackageSlider

const Carosuel = styled.div`
.Carosuel{
    height: 340px;
cursor:pointer;
overflow: hidden;
.Innercarosuel{
    display: flex;
    .Item{
        height: 15rem;
        min-width: 15rem;
        padding: 15px;
        
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
    }
}


`


const CarosuelImage = styled.img`
width:100%;
height:100%;
border-radius: 8px;

`
const CarouselDetails = styled.div`
display: flex;
justify-content: space-between;
    align-items: center;

`

const CarosuelInfo = styled.div`
display: flex;
    flex-direction: column;
`
const CarosuelName = styled.div`
font-size: 10px;
color: white;
`
const CarosuelPrice = styled.div`
font-size: 10px;
color: white;
`
const CarosuelButton = styled(Link)`
height: 25px;
text-decoration: none;
color: black;
    font-size: 10px;
    border-radius: 5px;
    padding: 4px 12px;
    background-color: floralwhite;
    font-weight: bolder;
    &:hover{
        background-color: blue;
    }
`
