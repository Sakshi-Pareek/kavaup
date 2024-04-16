"use Client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

export default function TrustedPartner() {
  const data = [
    {
      image: "/assets/images/png/slide1.png",
    },
    {
      image: "/assets/images/png/slide2.png",
    },
    {
      image: "/assets/images/png/slide3.png",
    },
    {
      image: "/assets/images/png/slide4.png",
    },
    {
      image: "/assets/images/png/slide5.png",
    },
    {
      image: "/assets/images/png/slide6.png",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    <>
      <Container className="my-5 py-5 custom_container">
        <h2 className="fw-medium fs_md text_black02 lh_148 text-center my-5 pb-2">
          Our Trusted Partners
        </h2>
        <Slider
          className="text-[30px] font-bold w-full outline-none"
          {...settings}
        >
          {data.map((a, index) => (
            <div>
              <Image
                src={a.image}
                alt="cardimg"
                width={190}
                height={33}
                className="object-fit-cover"
              />
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
}
