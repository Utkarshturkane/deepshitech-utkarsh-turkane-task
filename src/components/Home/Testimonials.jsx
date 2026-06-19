import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Tejal Shinde",
      image: "/images/faces/1.webp",
      review:
        "Deepshitech has done an amazing job for my business. Their advertising and marketing skills have significantly enhanced my online presence. The team is knowledgeable, responsive, and always provides outstanding results. Highly recommended..",
    },
    {
      id: 2,
      name: "Shraddha Singh",
      image: "/images/faces/2.webp",
      review:
        "I’m extremely pleased with Deepshitech’s services. Their advertising and marketing expertise has dramatically improved my online presence. The team is professional, responsive, and consistently delivers outstanding results. Highly appreciated.",
    },
    {
      id: 3,
      name: "Arjun Sharma",
      image: "/images/faces/3.webp",
      review:
        "I had a great experience with team of Deepshitech. There responsiveness is excellent, I’m so happy to work with them..",
    },
    {
      id: 4,
      name: "Aytan Abbasli",
      image: "/images/faces/4.webp",
      review:
        "Exceptional experience with Deepshitech.Their innovative strategies and dedicated team have transformed our business growth.Highly responsive, professional, and results driven. Highly recommend for anyone looking to elevate their marketing efforts.",
    },
    {
      id: 5,
      name: "Dr.Sharky",
      image: "/images/faces/5.webp",
      review:
        "Deepshitech stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
    },
    {
      id: 6,
      name: "Dharmadev Vishwakarma",
      image: "/images/faces/6.webp",
      review:
        "I had the pleasure of working with Deepshitech, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
    },
    {
      id: 7,
      name: "Ritesh Chopra",
      image: "/images/faces/7.webp",
      review:
        "Deepshitech advertising private limited is one of my favourite.. They value their clients and customers with professionalism... I appreciate their hard work and recommend it too....",
    },
  ];

  const logos = [
    { imgUrl: "/images/logos/40.svg" },
    { imgUrl: "/images/logos/50.svg" },
    { imgUrl: "/images/logos/9.svg" },
    { imgUrl: "/images/logos/60.svg" },
    { imgUrl: "/images/logos/5.svg" },
    { imgUrl: "/images/logos/7.svg" },
    { imgUrl: "/images/logos/10.svg" },
    { imgUrl: "/images/logos/11.svg" },
  ];

  return (
    <div className="bg-[#f2f2f2] h-fit relative z-10 lg:pt-[120px] lg:pb-[120px] py-[90px] px-[30px]">
      <div className="grid lg:grid-cols-[450px_350px] grid-cols-1 gap-6 justify-end mb-[60px]">
        <div className="">
          <p className="text-[#00000080] lg:text-right text-center">
            Customer reviews are a valuable source
            <br />
            of information for both businesses and consumers.
          </p>
        </div>
        <div className="lg:block hidden">
          <hr className="text-[#00000028] mt-2" />
        </div>
      </div>

      <div
        className="testimonial-heading lg:text-[68px] text-[36px] text-center
      lg:leading-20 leading-12 mb-[60px]"
      >
        Customer <span>Voices:</span> <br className="lg:block hidden" /> Hear
        What <span>They Say!</span>
      </div>

      <div className="testimonial-slider mb-[120px]">
        {/* Avatar Slider */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={6}
          spaceBetween={1}
          className="mb-20 thumbSwiper flex justify-center items-center "
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="cursor-pointer flex justify-center w-fit">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cursor-pointer w-[90px] h-[90px] rounded-full object-top object-cover border-[4px] border-transparent transition-all duration-300 outline-8 outline-transparent hover:outline-8 hover:outline-white"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content Slider */}
        <div className="relative lg:w-[1000px] mx-auto">
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="lg:max-w-[617px] max-w-[80%] mx-auto text-center">
                  <div className="text-[#C78C24] text-7xl mb-5 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-12 h-12 fill-current text-black"
                      style={{
                        transform: "translate(0px, 0px)",
                        opacity: 1,
                        fill: "#C78C24",
                      }}
                    >
                      <path d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z" />
                    </svg>
                  </div>

                  <h3 className="text-[20px] font-semibold mb-4">
                    {item.name}
                  </h3>

                  <div className="text-[#00000080] tracking-[3px] mb-[30px]">
                    ..........
                  </div>

                  <p className="text-gray-500 lg:text-[22px] text-[20px] leading-relaxed testamonial-review font-bold tracking-[.5px]">
                    {item.review}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button className="custom-prev absolute left-0 lg:top-1/2 top-[0%]  -translate-y-1/2 z-10 w-[40px] h-[40px] rounded-full bg-[#E5E5E5] shadow flex items-center justify-center hover:bg-[#C78C24] hover:text-white duration-300">
            <BsArrowLeft />
          </button>

          {/* Right Arrow */}
          <button className="custom-next absolute right-0 lg:top-1/2 top-[0%] -translate-y-1/2 z-10 w-[40px] h-[40px] rounded-full bg-[#E5E5E5] shadow flex items-center justify-center hover:bg-[#C78C24] hover:text-white duration-300">
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="logo-slider">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={2}
          spaceBetween={0}
          speed={5000}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            992: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {logos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <img src={item.imgUrl} className="w-[200px]" alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
