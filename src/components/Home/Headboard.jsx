import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import homeHeadboard from "../../assets/home/AwaqInteship-homeHeadboard.png";

const imgSwiper = [{ name: "homeHeadboard", img: homeHeadboard, id: 1 }];

const Headboard = () => {
  return (
    <div className="static">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        {imgSwiper?.map((img, id) => (
          <SwiperSlide key={id}>
            <dir className="my-0 mx-0 max-w-full max-h-full min-w-[500] h-screen">
              <img src={img.img} alt={img.name} />
            </dir>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-10 top-10 absolute">
        <div className="max-h-32 font-custom m-3 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-widest  text-turquoise-blue font-bold		">
          <h1>
            AWAQ <br />
            CAMPUS <br />
            <p className=" text-grey">INTERNSHIP</p>
          </h1>
          <div className="mx-3">
            <button className="bt-green">Conoce más</button>
            <button className="bt-white">Programas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headboard;
