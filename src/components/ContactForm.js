import * as React from "react"
import styled from 'styled-components'
import InlineError from './InlineError';
import {
  validateEmail,
  validateFullName,
  validatePhone,
} from './Validation';
import { useState, useEffect } from 'react'
import {toast} from "react-toastify"

function ContactForm({closeContact , packgname}) {
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;  
    document.body.appendChild(script);
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [noperson, setNoperson] = useState('');
  const [dt, setDt] = useState('');
  const [packgnme, setPackgnme] = useState('');
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [send, setSend] = useState();
  const [formstate, setFormstate] = useState({});

  const changeHandler = (event) =>{
    setFormstate({...formstate, [event.target.name]:event.target.value});
  };
  const submitHandler = (event) => {
    console.log("inside submit handler");
    
    console.log(formstate);
    event.preventDefault();
    const config = {
        //8af1b0c0-2ed6-4ce5-b732-ad742483f092
        //thekoraputtravelgroup@gmail.com
        //bidyut old-a3e41cd6-1f50-4bd0-bfbe-8efcff42458a
        //formstate.Email
        SecureToken : "a3e41cd6-1f50-4bd0-bfbe-8efcff42458a",
        To : formstate.Email,
        From : 'bid10nan@gmail.com',
        Subject : `Enquiry regarding Package - ${packgname}`,
        Body : `${formstate.Name} is enquiring regading ${packgname} for ${formstate.NoPerson} person(s). starting from ${formstate.Date}.contact no- ${formstate.Phone}
                ${formstate.Message}`,
    };
    const config1 = {
        //8af1b0c0-2ed6-4ce5-b732-ad742483f092
        //thekoraputtravelgroup@gmail.com
        //bidyut old-a3e41cd6-1f50-4bd0-bfbe-8efcff42458a
        //formstate.Email
        SecureToken : "a3e41cd6-1f50-4bd0-bfbe-8efcff42458a",
        To : 'bid4nan@gmail.com',
        From : 'bid10nan@gmail.com',
        Subject : `Enquiry regarding Package - ${packgname}`,
        Body : `${formstate.Name} is enquiring regading ${packgname} for ${formstate.NoPerson} person(s). starting from ${formstate.Date}.contact no- ${formstate.Phone}
                ${formstate.Message}`,
    };
        window.Email.send(config).then(()=>{
            window.Email.send(config1).then(()=>{
                toast.success(`Email Sent Successfully to ${config1.To}`);
            });
        closeContact(false);
        toast.success("Email Sent Successfully");
  });
    };

  useEffect(() => {
  validateFullName({ fullName, setFullNameError });
  validateEmail({ email, setEmailError });
  validatePhone({ phone, setPhoneError });

  if (send) {
    toast.success(send.msg);
    setFullName("")
    setEmail("")
    setMessage("")
    setSend()
    setPhone("")
    setDt("")
    setNoperson("")
    setPackgnme("")
  }
}, [fullName, email, phone, message, send,dt,noperson,packgnme]);

 

  return (
<ContactFormBG>
    <ContactFormContainer>
        <ContactFormScreen>
            <ContactFormSreenHeader>
                <ContactFormScreenHeaderRight>
                  <ContactFormDiv className="screen-header-ellipsis" onClick={()=>closeContact(false)}></ContactFormDiv>
                </ContactFormScreenHeaderRight>
              </ContactFormSreenHeader>
            <ContactFormScreenBody>
                <ContactFormScreenBodyItem>
                    <ContactFormAppForm>
                        <ContactFormAppFormGroup>
                            <ContactFormAppFormControlInput type="text"  value={formstate.Name || ""}
                  onChange={changeHandler}
                  name="Name"
                  required
                  placeholder="NAME"/>
                        </ContactFormAppFormGroup>
                        {fullNameError && <InlineError error={fullNameError} />}
                        <ContactFormAppFormGroup>
                            <ContactFormAppFormControlInput required
                            name = "Email"
                  value={formstate.Email || ""}
                  onChange={changeHandler}
                  type="email" placeholder="EMAIL"/>
                        </ContactFormAppFormGroup>
                        {emailError && <InlineError error={emailError} />}
                        <ContactFormAppFormGroup>
                            <ContactFormAppFormControlInput  value={formstate.Phone || ""}
                            name = "Phone"
                            onChange={changeHandler}
                    type="text" placeholder="CONTACT NO"/>
                        </ContactFormAppFormGroup>
                        {phoneError && <InlineError error={phoneError} />}
                        <ContactFormAppFormGroup>
                            <ContactFormAppFormControl>
                                <ContactFormDiv className="package-details" name="PackageName" readOnly> Package Name - {packgname} </ContactFormDiv>
                            </ContactFormAppFormControl>
                        </ContactFormAppFormGroup>
                        <ContactFormAppForm>
                            <ContactFormAppFormGroup>
                                <ContactFormAppFormControlInput type="text" name = "NoPerson" value = {formstate.NoPerson || ""} onChange={changeHandler} placeholder="NUMBER OF PERSONS"/>
                            </ContactFormAppFormGroup>
                            <ContactFormAppFormGroup>
                                <ContactFormAppFormControlInput type="text" name = "Date" value = {formstate.Date || ""} onChange={changeHandler} onFocus={(e) => (e.target.type = "date")} placeholder="EXPECTED START DATE"/>
                            </ContactFormAppFormGroup>
                            <ContactFormAppFormGroupMessage>
                                <ContactFormAppFormControlTextArea name="Message" type="text" value={formstate.Message || ""} 
                                onChange={changeHandler} placeholder="Please Enter your query"></ContactFormAppFormControlTextArea>
                            </ContactFormAppFormGroupMessage>
                            <ContactFormAppFormGroupButton>
                                <ContactFormAppFormButton onClick={()=>closeContact(false)}>CANCEL</ContactFormAppFormButton>
                                <ContactFormAppFormButton onClick={submitHandler}>SEND</ContactFormAppFormButton>
                            </ContactFormAppFormGroupButton>
                        </ContactFormAppForm>
                    </ContactFormAppForm>
                </ContactFormScreenBodyItem>
            </ContactFormScreenBody>
        </ContactFormScreen>
    </ContactFormContainer>
</ContactFormBG>
  )
}

export default ContactForm
const ContactFormBG = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(200, 200, 200);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`
const ContactFormContainer = styled.div`
flex: 0 1 700px;
    margin: auto;
    padding: 10px;
    height:500px;
    width:500px;
    margin-top: 1px;
    `
const ContactFormScreen = styled.div`
position: relative;
    background: #3e3e3e;
    border-radius: 15px;

    :after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 20px;
        right: 20px;
        bottom: 0;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
        z-index: -1;
      }
`
const ContactFormSreenHeader = styled.div`
display: flex;
    align-items: center;
    padding: 10px 20px;
    background: #4d4d4f;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`
const ContactFormScreenHeaderRight = styled.div`
float: right;
`
const ContactFormScreenBody = styled.div`
display: flex;

@media screen and (max-width: 520px) {

    flex-direction: column;
}

@media screen and (max-width: 600px) {
    padding: 40px;
  }
`
const ContactFormScreenBodyItem = styled.div`
flex: 1;
    padding: 50px;
    @media screen and (max-width: 600px) {
        padding: 0;
    }
`
const ContactFormAppForm = styled.div`

`
const ContactFormAppFormGroup = styled.div`
margin-bottom: 15px;
`
const ContactFormAppFormGroupMessage = styled.div`
margin-top: 40px;
margin-bottom: 15px;
`
const ContactFormAppFormGroupButton = styled.div`
margin-bottom: 0;
    text-align: right;
`
const ContactFormAppFormControl = styled.div`
width: 100%;
padding: 10px 0;
background: none;
border: none;
border-bottom: 1px solid #666;
color: #ddd;
font-size: 14px;
text-transform: uppercase;
outline: none;
transition: border-color .2s;
:placeholder {
    color: #666;
  }
  :focus {
    border-bottom-color: #ddd;
  }
`
const ContactFormAppFormButton = styled.button`
font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 1.4px;
    background: none;
    border: none;
    color: #ea1d6f;
    font-size: 14px;
    cursor: pointer;
    outline: none;

    :hover {
        color: #b9134f;
    `

const ContactFormAppFormControlInput = styled.input`
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

const ContactFormAppFormControlTextArea = styled.textarea`
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
const ContactFormDiv = styled.div`
*, *:before, *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%);
    font-size: 12px;
  }
  
`

