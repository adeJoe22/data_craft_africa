import React from "react";
// import { AiOutlineTwitter } from "react-icons/ai";
import {
  FooterCaption,
  FooterCaptionContent,
  FooterContainer,
  FooterRow,
  FooterWrapper,
  ContactSection,
  Address,
  ContactForm,
  SocialSection,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterCaption>
            <FooterCaptionContent>
              <div>Contact Us</div>
            </FooterCaptionContent>
          </FooterCaption>
          <FooterRow>
            <ContactSection>
              <Address>
                <div>Data Craft Africa Limited</div>
                <p>New Haven, Ushirika Road, Karen, Nairobi</p>
              </Address>
              <ContactForm>
                <div>
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Enter enquiry here" />
                  <button>Send us mail</button>
                </div>
              </ContactForm>
            </ContactSection>
            <SocialSection>
              <p>Follow us on Social platform</p>
              <span>{/* <AiOutlineTwitter /> */}</span>
              <div>© 2023 Data Craft Africa Limited</div>
            </SocialSection>
          </FooterRow>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
