import React from "react";
import { BsTwitter } from "react-icons/bs";
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
                <div>Data Craft</div>
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
              <span>
                <BsTwitter />
              </span>
              <div>© 2023 Data Craft</div>
            </SocialSection>
          </FooterRow>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
