import React from "react";
import {
  Desc,
  SocialIcons,
  Title,
  MemberCard,
  ImageWrap,
  MemberCaption,
  MemberComponent,
  MemberRow,
  MemberWrapper,
} from "./MemberElement";

import { teamData } from "./teamData";
const Members = () => {
  return (
    <>
      <MemberComponent>
        <MemberWrapper>
          <MemberCaption>
            <div>Our Team</div>
            <p>We have a diverse team of experienced and new professionals.</p>
          </MemberCaption>
          <MemberRow>
            {teamData?.map(({ id, image, fname, lname, desc }) => (
              <MemberCard key={id}>
                <ImageWrap>
                  <img src={image} alt="images" />
                </ImageWrap>
                <Title>
                  <span>{fname}</span> {lname}
                </Title>
                <Desc>{desc}</Desc>
                <SocialIcons>
                  <span></span>
                  <span></span>
                  <span></span>
                </SocialIcons>
              </MemberCard>
            ))}
          </MemberRow>
        </MemberWrapper>
      </MemberComponent>
    </>
  );
};

export default Members;
