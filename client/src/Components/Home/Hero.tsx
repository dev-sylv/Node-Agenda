import React from "react";
import styled from "styled-components";
import hold1 from "../Assets/img_3.jpg";
import hold2 from "../Assets/img_4.jpg";
import hold3 from "../Assets/house3.jpg";
import hold4 from "../Assets/otherpages.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Body>
        {/* <Slider {...settings}> */}
        <Contain>
          <Left>
            <div>
              <Slider {...settings}>
                <div>
                  <Buy>Buy, Sell and Rent Properties</Buy>

                  <Need>
                    Need a perfect place to live right now? Here's the best
                    offer for you! Amazing house with the most comfort layout is
                    fully equipped with everything needed.
                  </Need>

                  <Start>Get Started</Start>
                </div>

                <div>
                  <Buy>Buy, me</Buy>

                  <Need>
                    Need a perfect place to live right now? Here's the best
                    offer for you! Amazing house with the most comfort layout is
                    fully equipped with everything needed.
                  </Need>

                  <Start>Get Started</Start>
                </div>

                <div>
                  <Buy>Buy, sylvias</Buy>

                  <Need>
                    Need a perfect place to live right now? Here's the best
                    offer for you! Amazing house with the most comfort layout is
                    fully equipped with everything needed.
                  </Need>

                  <Start>Get Started</Start>
                </div>
              </Slider>
            </div>
          </Left>

          <Right>
            <Hold1>
              <Image
                style={{
                  width: "150%",
                  height: "165%",
                  transform: "rotate(315deg)",
                  position: "absolute",
                  top: "-40px",
                  left: "-170px",
                }}
                src={hold1}
              />
            </Hold1>

            <Hold2>
              <Image
                style={{
                  width: "150%",
                  height: "165%",
                  transform: "rotate(315deg)",
                  position: "absolute",
                  top: "-60px",
                  left: "-50px",
                }}
                src={hold2}
              />
            </Hold2>

            <Hold3>
              <Image
                style={{
                  width: "150%",
                  height: "165%",
                  transform: "rotate(315deg)",
                  position: "absolute",
                  top: "-40px",
                  left: "-60px",
                }}
                src={hold3}
              />
            </Hold3>

            <Hold4>
              <Image
                style={{
                  width: "150%",
                  height: "165%",
                  transform: "rotate(315deg)",
                  position: "absolute",
                  top: "15px",
                  left: "-140px",
                }}
                src={hold4}
              />
            </Hold4>
          </Right>
        </Contain>
        {/* </Slider> */}
      </Body>
    </>
  );
};

export default Hero;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const Image = styled.img``;

const Hold5 = styled.div`
  width: 1000px;
  height: 1000px;
  border-radius: 30px;
  transform: rotate(45deg);
  background-color: #f6f9ff;
  position: absolute;
  right: -280px;
  top: 0px;
  border: none;
  overflow: hidden;
`;

const Hold4 = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 30px;
  transform: rotate(45deg);
  background-color: #d4eaff;
  position: absolute;
  right: -210px;
  top: 30px;
  border: none;
  overflow: hidden;
  z-index: 100;
`;

const Hold3 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  transform: rotate(45deg);
  background-color: #d4eaff;
  position: absolute;
  left: 25px;
  bottom: 100px;
  border: none;
  overflow: hidden;
  z-index: 100;
`;

const Hold2 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 35px;
  transform: rotate(45deg);
  background-color: #d4eaff;
  position: absolute;
  right: 190px;
  top: 50px;
  border: none;
  overflow: hidden;
  z-index: 100;
`;

const Hold1 = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50px;
  transform: rotate(45deg);
  background-color: #d4eaff;
  position: absolute;
  right: -120px;
  bottom: -50px;
  border: none;
  // background-image: url("/images/slide1.jpg");
  // background-position: contain;
  overflow: hidden;
  z-index: 100;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const Start = styled.button`
  outline: 0;
  grid-gap: 8px;
  align-items: center;
  // background: 0 0;
  border: 1px solid #511378;
  border-radius: 30px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 16px;
  gap: 8px;
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  // padding: 12px 16px;
  width: 200px;
  height: 50px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.2s ease-out;
  white-space: nowrap;
  color: #511378;
  // background-color: #004DFF;
  background-color: #ffffff;
  font-weight: 600;

  :hover {
    box-shadow: 4px 4px 0 #511378;
    transform: translate(-4px, -4px);
  }
  :focus-visible {
    outline-offset: 1px;
  }
`;

const Need = styled.div`
  color: #511378;
  // color: #494949;
  font-size: 16px;
  font-weight: 600;
  margin-top: 35px;
  margin-bottom: 35px;
  width: 90%;
`;

const Buy = styled.div`
  width: 100%;
  color: #511378;
  // color: #494949;
  font-size: 65px;
  font-weight: 600;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
`;

const Contain = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: blue; */
`;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  // background-image: url("/images/slide1.jpg");
  background-position: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* background-color: red; */
`;
