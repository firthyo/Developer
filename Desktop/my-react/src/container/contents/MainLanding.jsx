import React from "react";
// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import styled from "styled-components/macro";

import Bg from "../../assets/images/LeadCom.jpeg";

import LandingCategory from "../contents/LandingCategory";

import CusomterLanding from "../contents/CusomerLanding";
import Footer from "../contents/Footer";

const MainLanding = () => {
  return (
    <div>
      <STitle>
        <SBackground>
          {/* <img src={Bg} /> */}
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // slidesPerView={1}
          >
            <SwiperSlide>
              <img src={Bg} alt="" />
              <h1>test H!</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bg} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bg} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bg} alt="" />
            </SwiperSlide>
          </Swiper>
        </SBackground>
        <LandingCategory />
        <CusomterLanding />
        <Footer />
      </STitle>
    </div>
  );
};

export default MainLanding;
const STitle = styled.div`
  /* height: 100vh; */
`;
const SBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > img {
    width: 100%;
  }
`;
