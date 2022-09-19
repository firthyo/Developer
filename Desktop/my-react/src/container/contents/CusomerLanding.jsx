import react from "react";
import styled from "styled-components/macro";
import Chiangrai_utd from "../../assets/images/Chiangrai_utd.png";
const CusomterLanding = () => {
  return (
    <SContainer>
      <p> Our customer</p>
      <SCustomer>
        <img src={Chiangrai_utd}></img>
        <img src={Chiangrai_utd}></img>
        <img src={Chiangrai_utd}></img>
        <img src={Chiangrai_utd}></img>
        <img src={Chiangrai_utd}></img>
      </SCustomer>
    </SContainer>
  );
};

export default CusomterLanding;

const SContainer = styled.div`
  height: 600px;
  background: rgba(0, 0, 0, 0.92);

  width: 100%;
  & > p {
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  & > img {
    width: 50%;
    height: 50%;
  }
`;

const SCustomer = styled.div`
  display: flex;
  justify-content: space-between;
`;
