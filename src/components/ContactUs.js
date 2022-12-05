import React, { useState } from 'react'
import styled from 'styled-components'

const ContactUs = ({heading}) => {
  const script = document.createElement("script");
  script.src = "https://smtpjs.com/v3/smtp.js";
  script.async = true;  
  document.body.appendChild(script);
  const [formstate, setFormstate] = useState({});

  const changeHandler = (event) =>{
    setFormstate({...formstate, [event.target.name]:event.target.value});
  };
  return (
    <ContactContainer>
    <ContactHeader>{heading}</ContactHeader>
        <ContactWrapper>
            <ContactBody>
            <ConatctAbout></ConatctAbout>
            <ContactInput>
                <ContactFormBody>
                  <ContactFormBodyGroup>
                    <ContactName type="text"  value={formstate.Name || ""}
                  onChange={changeHandler}
                  name="name"
                  required
                  placeholder="NAME"/>
                  </ContactFormBodyGroup>
                  <ContactFormBodyGroup>
                    <ContactNumber type="text"  value={formstate.Phone || ""}
                  onChange={changeHandler}
                  name="phonenumber"
                  required
                  placeholder="Phone Number"/>
                  </ContactFormBodyGroup>
                  <ContactFormBodyGroup>
                    <ContactEmail type="email"  value={formstate.Email || ""}
                  onChange={changeHandler}
                  name="email"
                  required
                  placeholder="Email"/>
                </ContactFormBodyGroup>
                </ContactFormBody>
                <ContactUsButton type="button">Submit</ContactUsButton>
            </ContactInput>
            </ContactBody>
        </ContactWrapper>
    </ContactContainer>
  )
}
export default ContactUs
const ContactContainer = styled.div`
min-height: 100vh;
padding: 1rem calc((100vh - 1300px) / 2);
color: #fff;

}
`
const ContactHeader = styled.div`
font-size: clamp(0.2rem,2vw,3rem);
margin-bottom: 1rem;
color: #000;
font-weight: bolder;
font-family: Brushstroke;
margin-left: 30px;
background-image: linear-gradient(to right, yellow, white);
width: 50%;
padding-left: 10px;
`
const ContactWrapper = styled.div`
height: 90vh;
   display: flex;
    flex-direction: column;
    justify-content: center;
`
const ContactBody = styled.div`
display:flex;
flex-direction:row;
    column-gap: 26px;
    justify-content: center;
`
const ConatctAbout = styled.div`
border-radius: 11px;
    border: black solid 1px;
    padding: 14px;
    height: 300px;
    width: 40%;
    background-color: white;
`
const ContactInput = styled.div`
border-radius: 11px;
border: black solid 1px;
padding: 14px;
height: 300px;
width: 40%;
transform: translate(-118px, 55px);
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
align-items: center;
`
const ContactFormBody = styled.div``
const ContactName = styled.input`
font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 1.4px;
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #ddd;
    font-size: 14px;
    outline: none;
    transition: border-color .2s;
    
`
const ContactNumber = styled.input`
font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 1.4px;
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #ddd;
    font-size: 14px;
    outline: none;
    transition: border-color .2s;
`
const ContactEmail = styled.input`
font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 1.4px;
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #ddd;
    font-size: 14px;
    outline: none;
    transition: border-color .2s;
    `
const ContactUsButton = styled.button`
font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 1.4px;
    background: none;
    border: none;
    color: #ea1d6f;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    position: relative;
    right: -123px;
    margin-top: 52px;
    :hover {
        color: #b9134f;
    
`
const ContactFormBodyGroup = styled.div``