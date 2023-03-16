import React from "react";
import {
  ReferenceContainer,
  ReferenceWrapper,
  ReferenceCaption,
  ReferenceRow,
  ReferenceCol,
  RefCompany,
  Company,
  Logo,
} from "./ReferenceElement";
import img from "../../images/asset4.jpeg";
import img2 from "../../images/asset5.jpeg";
import img3 from "../../images/asset6.png";
const refData = [
  {
    id: 1,
    name: "Bank of Kigali",
    comment: `“The Pivot Access Team that works on our P Dialler
                    Communication solution are regarded as an extension of the
                    BK family. Always on call. Always professional. Not only
                    have they provided us with the perfect solution, they have
                    gone one step further and proved to be the support system
                    that has set a bar for all our other suppliers"`,
    designation: "Head of Customer Service, Bank of Kigali",

    client: "Irene Murerwa",
    image: img,
  },
  {
    id: 2,
    name: "Development Bank of Rwanda (BRD)",
    comment: `“The quality of their work is recognized and appreciated by the bank and it is evident in our client’s acceptance of the payment channels provided.”`,
    designation: "– CEO BRD",

    client: "Mr. Alex Kanyankole",
    image: img2,
  },
  {
    id: 3,
    name: "Coge Banque",
    comment: `“I would testify that they complete their work quickly and with highest quality. On more than 1 occasion critical components are given to them to develop and all times theyq2w were able to deliver on time.”`,
    designation: "",

    client: "CEO COGEBANQUE",
    image: img3,
  },
  {
    id: 4,
    name: "Bank of Kigali",
    comment: `“They have a firm grasp of technical details and take time to document them and thus facilitating the Bank’s technical team to easily manage the solutions after deployment. The multiple technical ad financial options Pivot access gives us save time, money and also trigger fresh thinking for future innovations.”`,
    designation: "CEO Bank of Kigali",

    client: "Mr. Gatera",
    image: img,
  },
];

const Reference = () => {
  return (
    <>
      <ReferenceContainer id="reference">
        <ReferenceWrapper>
          <ReferenceCaption>
            <div>REFERENCES</div>
            <p>What our clients say about us.</p>
          </ReferenceCaption>
          <ReferenceRow>
            {refData?.map(
              ({ image, name, id, designation, comment, client }) => (
                <ReferenceCol key={id}>
                  <RefCompany>
                    <Company>
                      <div>{name}</div>
                      <p>{comment}</p>
                      <span>
                        <strong>{client}</strong>
                        {designation}
                      </span>
                    </Company>
                    <Logo>
                      <img src={image} alt="image" />
                    </Logo>
                  </RefCompany>
                </ReferenceCol>
              )
            )}
          </ReferenceRow>
        </ReferenceWrapper>
      </ReferenceContainer>
    </>
  );
};

export default Reference;
