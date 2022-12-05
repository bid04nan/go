import React from 'react'
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'gatsby';
import logo from "../assets/images/gokoraputlogo.jpg"
import { NavLink } from 'react-router-dom';
const Footer = () => {
    function ButtonMailto({label,mailto}) {
        return (
            <MailTo>
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        </MailTo>
        );
    };
    
  return (
    <FooterContainer>
        <Separator/>
        <FooterBox>
            <FooterSocialBox>
                <FooterImg src={logo}/>
                <FooterText>Explore the nature around koraput , getting lost in its mesmerisiing beauty and the untamed beauty of nature.</FooterText>
                <FooterSocial>
                <SocialIcons url="https://twitter.com" style={{height:'60%',width:'15%'}}/>
                    <SocialIcons url="https://facebook.com" style={{height:'60%',width:'15%'}} />
                    <SocialIcons url="https://instagram.com" style={{height:'60%',width:'15%'}} />
                    <SocialIcons url="https://youtube.com" style={{height:'60%',width:'15%'}}/>
                </FooterSocial>
            </FooterSocialBox>
            <FooterExplore>
                <FooterExploreHeading>Quick Links</FooterExploreHeading>
                <FooterExploreBody><NavLink to="/AllPackages" >Packages</NavLink></FooterExploreBody>
                <FooterExploreBody><NavLink  to="/AllDestinations" >Destinations</NavLink></FooterExploreBody>
                <FooterExploreBody ><NavLink to="/Gallary" >Gallary</NavLink></FooterExploreBody>
                <FooterExploreBody ><NavLink to="/AllTestimonials">Testimonials</NavLink></FooterExploreBody>
            </FooterExplore>
            <FooterContact>
                    <FooterContactHeading>reach out to us</FooterContactHeading>
                    <ButtonMailto label="bid10nan@gmail.com" mailto="mailto:bid10nan@gmail.com" />
            </FooterContact>
        </FooterBox>
    </FooterContainer>
  )
}

export default Footer

const Separator = styled.div`
margin: 20px;
border: 1px solid #c3c3c3;
`

const FooterContainer = styled.div`
padding: 20px;
background: black;
width: 100%;
`
const FooterImg = styled.img`
height: 70px;
width: 70px;
`
const FooterText=styled.p`
word-wrap: break-word;
  overflow-wrap: break-word;
width: 20rem;
color: white;
font-style: italic;
margin-top: 1rem;
font-size: clamp(0.8rem,2vw,1rem);
@media screen and (max-width:769px){
    width: 14rem;
}
`
const FooterBox = styled.div`
display:flex;
flex-direction:row;
justify-content: space-around;
align-items: center;
@media screen and (max-width:425px){
    flex-direction:column;
}
`
const FooterContact = styled.div`
display:flex;
flex-direction:column;
`
const FooterContactHeading = styled.div`
color: white;
font-weight: 900;
font-size: clamp(1rem,2vw,3rem);
`
const FooterExplore = styled.div`
display:flex;
flex-direction:column;
`
const FooterExploreHeading = styled.div`
color: white;
font-weight: 900;
font-size: clamp(1rem,2vw,3rem);
`
const FooterExploreBody = styled.div`
text-decoration: none;
color: whitesmoke;
`
const FooterSocialBox = styled.div`
display:flex;
flex-direction:column;
align-items: center;
`
const FooterSocial = styled.div`
display:flex;
flex-direction:row;
height: 45px;
justify-content: space-around;
align-items: center;
width: 180px;
`
const SocialIcons = styled(SocialIcon)`
`
const MailTo = styled.div`
display: flex;
flex-direction: row;
column-gap: 10px;
`