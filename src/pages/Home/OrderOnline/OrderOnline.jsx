// import Swiper from "swiper";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import image1 from "../../../assets/home/01.jpg";
import image2 from "../../../assets/home/02.jpg";
import image3 from "../../../assets/home/03.png";
import image4 from "../../../assets/home/04.jpg";
import image5 from "../../../assets/home/05.png";
import image6 from "../../../assets/home/06.png";

const OrderOnline = () => {
  return (
    <div className="mb-6">
        <section className='w-2/4 mx-auto mb-4 text-center'
        >
        <SectionTitle
        heading={"order online"}
        subHeading={"From 11.00am to 10.00pm"}
      />
      
        </section>
      <section>
        <Swiper
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-3/4"
        >
          <SwiperSlide className="">
            <img src={image1} alt="" />

            <h2 className=" uppercase text-center -mt-16  relative z-10 w-1/2 mx-auto  text-teal-200 text-2xl font-semibold bg-gray-900 bg-opacity-30 ">
              salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
            <h2 className="text-center -mt-16  relative z-10 w-1/2 mx-auto  text-teal-200 text-2xl font-semibold bg-gray-900 bg-opacity-30 ">
              SOUPS
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
            <h2 className="text-center -mt-16  relative z-10 w-1/2 mx-auto  text-teal-200 text-2xl font-semibold bg-gray-900 bg-opacity-30 ">
              PIZZAS
            </h2>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
            <h2 className="text-center -mt-16  relative z-10 w-1/2 mx-auto  text-teal-200 text-2xl font-semibold bg-gray-900 bg-opacity-30 ">
              DESSERTS
            </h2>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="" />
            <h2 className="text-center -mt-16  relative z-10 w-1/2 mx-auto  text-teal-200 text-2xl font-semibold bg-gray-900 bg-opacity-30 ">
              TEXT
            </h2>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={image6} alt="" />
            <h2 className="text-center -mt-16  relative z-10 w-1/2 mx-auto  text-teal-200 text-2xl font-semibold bg-gray-900 bg-opacity-30 ">
              TEXT
            </h2>{" "}
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default OrderOnline;
