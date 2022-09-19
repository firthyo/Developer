import react from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import card from "../../assets/images/bg-seat.jpg";

const CATEGORIES = ["Cinemas", "Auditoriums", "Stadium", "Waiting Areas"];

const LandingCategory = () => {
  const cardDetails = [
    {
      name: "Cinemas",
      img: card,
    },
    {
      name: "Auditoriums",
      img: card,
    },
    {
      name: "Stadium",
      img: card,
    },
    {
      name: "Waiting Areas",
      img: card,
    },
  ];
  return (
    // <SContainer>
    //   <SLeftContent>aljndfg;oaedfjnvareogndfverago;djnv </SLeftContent>

    //   <SRightContent>
    //     {CATEGORIES.map((el, i) => {
    //       return <SCategoryCard key={i}>{el}</SCategoryCard>;
    //     })}
    //   </SRightContent>

    // </SContainer>

    <SContainer>
      <Row>
        <Col xs={6}>
          Why Leadcom Seating is your reliable seating manufacturer and solution
          provider? Leadcom Seating is a global public seating specialist. We
          design, craft and create bespoke cinema chairs, auditorium chairs,
          theater chairs, airports chairs, lecture hall chairs, worship chairs,
          transportation chairs, and office furniture. We know that you have
          many options to choose from when it comes to public seating, but we’ve
          made it easy to see why Leadcom Seating is hands-down the better
          choice for your space.
        </Col>
        {cardDetails.map((el, i) => {
          return (
            <Col xs={3}>
              <SCategoryCard key={i}>
                <h4>{el.name}</h4>
                <img src={el.img}></img>
                <p>
                  Practical, hard-wearing, comfortable and bespoke styling of
                  public waiting spaces
                </p>
              </SCategoryCard>
            </Col>
          );
        })}
      </Row>
    </SContainer>
  );
};

export default LandingCategory;

const SContainer = styled(Container)`
  width: 100%;
  padding: 30px 0px;
  justify-content: center;
`;

const SLeftContent = styled.div`
  width: 30%;
`;

const SRightContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
`;

const SCategoryCard = styled.div`
  width: 100%;

  margin-top: 10px;
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 5px;
  height: 400px;
  /* display: flex; */
  /* &:hover {
    filter: brightness(90%);
  } */
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0.5;
  }
  & > img {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(102, 148, 193, 0.5);
    & > h4 {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
      opacity: 0.5;
    }
  }
  & > h4 {
    /* color: white; */
    text-align: center;
    justify-content: center;
    font-weight: 600;
  }
`;
