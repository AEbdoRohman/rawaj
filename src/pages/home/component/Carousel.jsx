import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = () => {
  const OurValues = [
    {
      id: 1,
      icon: "/scales.png",
      value:
        "خبرة اكثر من 20 عام ( خبرتنا الطويلة منذ العام 2005 بدأت بكفاح مستمر وسباق محموم لنيل مراكز متقدمة في مجال المقاولات مررنا بكل المراحل واجتزنا الصعاب لتكون لنا اساس وخبرة لكل ما يواجهنا )",
      large: true,
    },
    {
      id: 2,
      icon: "/helping-hand.png",
      value: "الالتزام بتسليم المشاريع في الوقت المحدد.",
    },
    {
      id: 3,
      icon: "/rocket.png",
      value: "التحسين المستمر والتطوير الدائم لأساليب ومنهجيات العمل.",
    },
    {
      id: 4,
      icon: "/handshake.png",
      value:
        "استخدام افضل الخامات واجود مواد البناء بما يتناسب مع تطلعات العميل.",
    },
  ];

  return (
    <section className="container mx-auto px-8 my-8">
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
              <div className="w-20 h-20 flex items-center justify-center bg-primary rounded-full mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                  style={{
                    filter:
                      "invert(56%) sepia(48%) saturate(450%) hue-rotate(350deg) brightness(95%) contrast(90%)",
                  }}
                />
              </div>

              <p className="text-gray-600 leading-relaxed min-h-[100px] flex items-center">
                {item.value}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
