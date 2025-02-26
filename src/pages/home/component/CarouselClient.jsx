import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import HomeTitle from "../../../componants/HomeTitle";

const CarouselClient = () => {
  const OurValues = [
    {
      id: 1,
      image: "/cl.png",
    },
    {
      id: 2,
      image: "/cl1.png",
    },
    {
      id: 3,
      image: "/cl2.png",
    },
    {
      id: 4,
      image: "/cl3.png",
    },
    {
      id: 5,
      image: "/cl4.png",
    },
  ];

  return (
    <section className="container mx-auto px-8 mb-8 md:mt-20">
      {/* title */}
      <HomeTitle title="أبرز عملاؤنا" />

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={1000}
      >
        {OurValues.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 h-full">
              <div className="w-64 h-64 flex items-center justify-center ">
                <img
                  src={item.image}
                  alt="client"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselClient;
