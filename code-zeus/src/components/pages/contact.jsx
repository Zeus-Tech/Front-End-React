import React from 'react';
import styled from 'styled-components';

const ContactForm = styled.div `
    text-align: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 5%;

// Fonts
@import url(https://fonts.googleapis.com/css?family=Raleway:300);
@import url(https://fonts.googleapis.com/css?family=Lusitana:400,700);

// Helpers
    @mixin clearfix {
    &:after {
        content: "";
        display: table;
        clear: both;
    }
    }

    .align-center {
    text-align: center;
    }


    // Basics
    html {
    height: 100%;
    }
    body {
    height: 100%;
    position: relative;
    }
    // Grid
    .row {
    @include clearfix;
    margin: -20px 0;
    .col {
        padding: 0 20px;
        float: left;
        box-sizing: border-box;
        &.x-50 {
            width: 50%;
        }
        &.x-100 {
            width: 100%;
        }
    }
    }

    .content-wrapper {
    min-height: 100%;
    position: relative;
    }

    .get-in-touch {
    max-width: 650px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    
    .title {
        text-align: center;
        font-family: Raleway, sans-serif;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 36px;
        line-height: 48px;
        padding-bottom: 48px;
    }
    }

    .contact-form {
    .form-field {
        position: relative;
        margin: 32px 0;
    }
    .input-text {
        display: block;
        width: 100%;
        height: 36px;
        border-width: 0 0 2px 0;
        border-color: #000;
        font-family: Lusitana, serif;
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
        
        &:focus {
            outline: none;
        }
        
        &:focus,
        &.not-empty {
            + .label {
                transform: translateY(-24px);
            }
        }
    }
    .label {
        position: absolute;
        left: 20px;
        bottom: 11px;
        font-family: Lusitana, serif;
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
        color: #888;
        cursor: text;
        transition: transform .2s ease-in-out;
    }
    
    .submit-btn {
        display: inline-block;
        background-color: #282c34;
        color: #fff;
        font-family: Raleway, sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 16px;
        line-height: 24px;
        padding: 8px 16px;
        border: none;
        cursor: pointer;
        &:hover{
            background-color: yellow;
            color: #282c34;
            outline: 1px solid #282c34;
        }
    }
    }

    .note {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-family: Lusitana, serif;
    font-size: 16px;
    line-height: 21px;
    
    .link {
        color: #888;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    }

`

export default function Contact() {
    
    return (
        <ContactForm id='contact' className="get-in-touch">
            <h1 className="title">Get in touch</h1>
            <form className="contact-form row">
                <div className="form-field col x-50">
                    <input id="name" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="name">Name</label>
                </div>
                <div className="form-field col x-50">
                    <input id="email" className="input-text js-input" type="email" required />
                    <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col x-100">
                    <input id="message" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="message">Message</label>
                </div>
                <div className="form-field col x-100 align-center">
                    <input className="submit-btn" type="submit" value="Submit" />
                </div>
            </form>
        </ContactForm>
    )
}
