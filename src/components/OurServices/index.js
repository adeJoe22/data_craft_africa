import React from "react";
import {
  ServiceComponent,
  ServiceWrapper,
  ServiceCaption,
  ServiceRow,
  ServiceColumn,
  ServiceColumn2,
  Items,
} from "./OurServiceElement";
import img from "../../images/asset3.png";
const Service = () => {
  return (
    <>
      <ServiceComponent id="service">
        <ServiceWrapper>
          <ServiceCaption>
            <div>Our Core Services</div>
            <p>
              Expose your company service through a on time integration with our
              <strong> "on demand software"</strong>
            </p>
          </ServiceCaption>
          <ServiceRow>
            <ServiceColumn>
              <Items>
                <span></span>
                <div>eSale</div>
                <p>
                  This is a bill aggregation platform offered as a service to
                  third party institutions and service providers who wish to let
                  their services be accessible to their clients in one platform.
                  End users can access this service through ussd, android & iOS
                  mobile applications.
                </p>
              </Items>
              <Items>
                <span></span>
                <div>Dashboard Reports</div>
                <p>
                  We create easy to read, one page summaries and analysis of the
                  information.Overviews of your system at a glance.
                </p>
              </Items>
            </ServiceColumn>
            <ServiceColumn2>
              <img src={img} alt="image" />
            </ServiceColumn2>
            <ServiceColumn>
              {" "}
              <Items>
                <span></span>
                <div>Push & Pull</div>
                <p>
                  Pivot Access offers this service to clients who wish to
                  transfer funds between their bank accounts and mobile money
                  wallets. This is called the “PUSH & PULL SERVICE” because
                  Funds can be pushed to/from either of the accounts.
                </p>
              </Items>
              <Items>
                <span></span>
                <div>VaultX Switch</div>
                <p>
                  VaultX is a service given to 3rd parties such as banks,
                  telecos and other card systems that need to integrate with
                  each other in-order to process payments. VaultX acts as a
                  conduit for processing payment transactions from telecos,
                  banks, ATMs and any other card based transactions. VaultX
                  implements an ISO interface through which all other third
                  parties that need to talk to the core system can communicate.
                </p>
              </Items>
            </ServiceColumn>
          </ServiceRow>
        </ServiceWrapper>
      </ServiceComponent>
    </>
  );
};

export default Service;
