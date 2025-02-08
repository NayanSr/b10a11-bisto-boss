import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-8">
      <section className="w-2/4 mx-auto mb-4 text-center">
        <SectionTitle
          heading={"testimonials"}
          subHeading={"What Our Clients Say"}
        />
      </section>
      <section className="w-3/4 mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <div key={review._id}>
              <SwiperSlide>
                <section className="px-16 text-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    className="w-full mx-auto my-4"
                    value={review.rating}
                    readOnly
                  />
                  <p className="text-sm">{review.details}</p>
                  <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </section>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;

/* 
"_id": "6430113af5a7e52ce1e8fa69",
        "name": "Robert Johnson",
        "details": "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
        "rating": 5
*/
