import * as React from "react"
import styled from 'styled-components'
import { RiCloseFill } from "react-icons/ri";

function GallaryImage({closeContact , imgsrc}) {
    return(
        <GallaryImageContainer>
            <GallaryClose onClick={()=>closeContact(false)}/>
            <GallaryImageWrapper>
                <GallaryImg src={imgsrc}>

                </GallaryImg>
            </GallaryImageWrapper>
        </GallaryImageContainer>

    )
}

export default GallaryImage
const GallaryClose = styled(RiCloseFill)`
position: fixed;
color: white;
top: -5px;
right: 15px;
z-index: 10000;
width: auto;
max-width: 100%;
height: auto;
max-height: 100%;
display: block;
line-height: 0;
box-sizing: border-box;
padding: 20px 0 20px;
margin: 0 auto;
`
const GallaryImageContainer = styled.div``
const GallaryImageWrapper=styled.div`
width: 100%;
  height: 100vh;
  position:fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color:#000000;
  transition:opacity .4s ease, visibility .4s ease, transform.5s ease-in-out;
  visibility:visible;
  opacity:1;
  transform : scale(1);
  overflow: hidden;
  z-index:999;
`
const GallaryImg = styled.img`
width:auto;
  max-width:100%;
  height:auto;
  max-height:100%;
  display:block;
  line-height: 0;
  box-sizing: border-box;
  padding: 20px 0 20px;
  margin:0 auto;
`