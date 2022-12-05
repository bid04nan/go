import React from 'react'
import styled from 'styled-components'
import third from "../assets/images/undraw_terms_re_6ak4.svg"
import safety from "../assets/images/undraw_safe_re_kiil.svg"
import hospitality from "../assets/images/undraw_cabin_hkfr.svg"
const Promise = () => {
  return (
    <PromiseConatiner>
        <PromiseHeader>Our Promises</PromiseHeader>
        <PromiseWarpper>
            <PromiseType>
            <PromiseHead>
                <Image src={hospitality} />
                
            </PromiseHead>
            <PromiseBody>
                <PromiseTag>Services Includes</PromiseTag>
                 <p>Pickup /Drop to and from Boarding Point</p>
                <p>Complementary Breakfast</p>
                <p>Stay at handpicked locations</p>
                <p>Dedicated Private ride for Trip</p>
                
                </PromiseBody>
            </PromiseType>
            <PromiseType>
            <PromiseHead>
            <Image src={third} />
            </PromiseHead>
            <PromiseBody>
                <PromiseTag>Transparency</PromiseTag>
                <p>no 3rd party includes.</p>
                <p>Everything from start to end is handled by our own team.</p>
                <p>Package Charges includes Driver allowance </p>
                <p>, parking/entry charges, stay, Pickup and Drop </p>
                
            </PromiseBody>
            </PromiseType>
            <PromiseType>
            <PromiseHead>
            <Image src={safety} />
            </PromiseHead>
            <PromiseBody>
                <PromiseTag>Safety and Security</PromiseTag>
                <p>All Destinations Provided by us are verified safe</p>
                <p>Our Team puts rigourous efforts to make your Trips Memorable</p>
                <p>24hr Support Available during Trips.</p>
                <p>Emergency First Aids , when needed.</p>
            </PromiseBody>
            </PromiseType>
        </PromiseWarpper>
    </PromiseConatiner>
  )
}

export default Promise
const PromiseTag = styled.div`
    text-align: center;
    margin: 10px;
`
const PromiseConatiner = styled.div`
height:fit-content;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
apgn-items: center;
background: black;
`
const PromiseHeader = styled.div`
font-size: clamp(1.4rem,2vw,3rem);
margin: 40px;
color: white;
font-weight: bolder;
font-family: Brushstroke;
text-align: center;
`
const PromiseWarpper = styled.div`
// display:flex;
// flex-direction:row;
display:grid;
grid-template-columns:auto auto auto;
justify-content:center;
align-items: center;
color:white;
@media screen and (max-width:425px){
    grid-template-columns:auto;
}
`
const PromiseType = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
padding: 15px;
    word-break: break-word;
`
const PromiseHead = styled.div``
const Image = styled.img`
height: 150px;
width: 150px;
@media screen and (max-width:1024px){
    height: 120px;
width: 120px;
}

`
const PromiseBody = styled.div`
// width: 25rem;
// ul{
//     text-align: center;
//     font-size: clamp(0.8rem,2vw,1.2rem);
// margin: 10px;
// font-weight: 600;
// }
// li{
//     text-align: initial;
//     font-size: clamp(0.7rem,2vw,1rem);
// margin: 10px;
// font-weight: 100;
// }
p{
    font-size: clamp(0.8rem,2vw,0.8rem);
    margin-bottom: 0rem; 
}
`