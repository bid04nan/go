// import React from 'react'
// import styled from 'styled-components'
// import {useStaticQuery, graphql} from 'gatsby'
// import Img from 'gatsby-image'
// import {Button} from "./Button"
// import { BiRupee } from "react-icons/bi"
// import { ImLocation } from "react-icons/im";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// export default function PackageDetail  ({data, heading})  {


 
// function getPackageDetail(data){
//   const packageDetailArray = []
//   data.allPackageDetailsJson.edges.forEach((item, index) => {
    
//     packageDetailArray.push(
//       <PackageDetailCard key = {index} >
//         <CarosuelB showThumbs={false}>
//          {getcarouselimg(item)} 
//     </CarosuelB>
//     <PackageDetailInfo>
//     <ImLocation />
//     {item.node.locations.map((elem) => (
//     elem
//   )).join(',')}
//         </PackageDetailInfo>
//         <PackageDetailInfo>  
//         <PackageDetailInfoHeading>
//           Overview
//         </PackageDetailInfoHeading>
//         <PackageDetailInfoBody>
//           {item.node.overview}
//         </PackageDetailInfoBody>
//         </PackageDetailInfo>
//         <PackageDetailInfo>
//         <PackageDetailInfoHeading>
//           Itenary Details
//         </PackageDetailInfoHeading>
//         {getitenarydetail(item)} 
//         </PackageDetailInfo>
//         </PackageDetailCard>
//      ) 
//     })
  
//   return packageDetailArray
//     }
//   function getcarouselimg(item){
//     const CarosuelImageArray =[]
//     item.node.img.forEach((element, ind) => { 
//       const src= element.childImageSharp.fluid.src;
//       CarosuelImageArray.push(
//       <div key = {ind}>
//       <PackageDetailImg 
//       src={src}
//       fluid={element.childImageSharp.fluid}
//       />
//       </div>
//       )
//   })
//   return CarosuelImageArray
// }
// function getitenarydetail(item){
//   const ItenarydetailArray =[]
//   item.node.description.forEach((element, ind) => { 
//     ItenarydetailArray.push(
//     <PackageDetailDescription key = {ind}>
//       <ItenaryDay>Day {ind}</ItenaryDay><ItenaryDetail>{element}</ItenaryDetail>
//     </PackageDetailDescription>
//     )
// })
// return ItenarydetailArray
// }

//   return (
//     <PackageDetailContainer>
//       <PackageDetailHeading>{heading}</PackageDetailHeading>
//       <PackageDetailWrapper>{getPackageDetail(data)}</PackageDetailWrapper>
//       </PackageDetailContainer>
//   )
// }
// export const query = graphql`
// query PQuery($PackageID: String) {
//   allPackageDetailsJson(filter: {name: {eq: $PackageID}}) {
//     edges {
//       node {
//         img {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         name
//         overview
//         packagename
//         description
//         amenitiesincluded
//         locations
//       }
//     }
//   }
// }
// `



// const PackageDetailContainer = styled.div`
// display: flex;
// background-color: red;
// min-height: 100vh;
// justify-content: center;
  
// `

// const PackageDetailHeading = styled.div``
// const PackageDetailWrapper = styled.div`
// height: 100%;
//     width: 100%;
//     background-color: green;
// `
// const PackageDetailImg = styled(Img)`
// .gatsby-image-wrapper img {
//   padding: 0;
//   position: absolute;
//   right: 0;
//   top: 0;
//   height: 500px;
// }
// `
// const PackageDetailCard = styled.div`
// width: 88%;
//     background-color: blue;
//     height: 500px;
//     float: none;
//     margin: 0 auto;
// `

// const PackageDetailInfo = styled.div`
// border-radius: 11px;
//     border: black solid 1px;
//     padding: 14px;
//     margin-top: 16px;
// `
// const CarosuelB = styled(Carousel)`
// height: 500px;
//     width: 100%;
//     .carousel.carousel-slider {
//       width: 100%;
//     height: 500px;
//     }
// `
// const PackageDetailInfoHeading = styled.div`
// text-align: center;
//     margin-bottom: 9px;`
// const PackageDetailInfoBody = styled.div``

// const PackageDetailDescription = styled.div`
// border: 1px solid black;
//     border-radius: 5px;
//     padding: 9px;
//     margin-top: 5px;
//     margin-bottom: 5px;
//     display:flex; 
//     flex-direction:row;
// `
// const ItenaryDay = styled.div`
// border: solid black;
// border-radius: 50%;
// height: 50px;
// align-items: center;
// padding: 3px;
// padding-block: 12px;
// `
// const ItenaryDetail = styled.div`
// padding: 16px;
// `