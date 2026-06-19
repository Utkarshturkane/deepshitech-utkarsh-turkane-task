import Button from "../Button";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function WhatWeDo() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const productsData = [
    {
      name: "Web Development",
      data: "Website conversion landing page creation means creating new Internet pages with high conversion rates ",
    },
    {
      name: "Digital Advertising",
      data: "India's digital advertising scene is experiencing explosive growth. With a massive, internet-savvy population, it's become a goldmine for brands. Mobile devices are the king, driving a majority of ad interactions. ",
    },
    {
      name: "IVR CALL & SMS Advertising",
      data: "Marketing Platform with aggregated digital tools built to optimize Performance Marketing, Customer Engagement and AI Driven Analytics to better understanding Consumer Behaviour. ",
    },
    {
      name: "Television  Advertising",
      data: "The Television Advertising of our company is creatively done while not deviating from the basic strategic approach. ",
    },
    {
      name: "Airport  Advertising",
      data: "Airport Advertising for our company is completely different from what companies are doing nowadays. ",
    },
    {
      name: "Cinema  Advertising",
      data: "Website conversion landing page creation means creating new Internet pages with high conversion rates ",
    },
    {
      name: "Newspaper  Advertising",
      data: "Website conversion landing page creation means creating new Internet pages with high conversion rates ",
    },
    {
      name: "Magazine  Advertising",
      data: "Website conversion landing page creation means creating new Internet pages with high conversion rates ",
    },
    {
      name: "Non-Traditional  Advertising",
      data: "Website conversion landing page creation means creating new Internet pages with high conversion rates ",
    },
    {
      name: "Outdoor  Advertising",
      data: "Website conversion landing page creation means creating new Internet pages with high conversion rates ",
    },
    {
      name: "Sports  Advertising",
      data: "Website conversion landing page creation means creating new Internet pages with high conversion rates ",
    },
    {
      name: "Radio  Advertising",
      data: "Website conversion landing page creation means creating new Internet pages with high conversion rates ",
    },
  ];

  return (
    <div className="bg-black text-white size-fit w-[100%] pt-[120px] px-[30px]">
      <div className="grid lg:grid-cols-[350px_350px] grid-cols-1 gap-6 justify-end">
        <div className="">
          <p className="text-[#FFFFFF66] lg:text-right text-center">
            Professionals focused on helping your brand grow and move forward.
          </p>
        </div>
        <div className="lg:block hidden">
          <hr className="text-[#FFFFFF66] mt-2" />
        </div>
      </div>

      <div className="whatwedo-title text-[74px] text-center mt-10 lg:block hidden">
        <div className="flex justify-center items-center">
          <span className="w-[250px] h-[80px] rounded-[70px] inline-block overflow-hidden mr-5">
            <img
              src="/public/images/people.webp"
              className="w-[100%] h-[100%] object-cover object-top rounded-[70px] hover:scale-120 transition-all duration-300"
              alt=""
            />
          </span>
          <span>Unique</span> &nbsp;Ideas <br />
        </div>
        <div className="flex justify-center items-center">
          <span>For Your</span> &nbsp;Business. &nbsp;{" "}
          <Button primary>What we do</Button>
        </div>
      </div>

      <div className="block text-[34px] text-center mt-[4rem] lg:hidden whatwedo-title">
        <span> Unique</span> Ideas <br /> <span>For Your</span> Buisness.
        <div className="flex justify-center items-center">
          <Button primary className="mt-[5rem] py-2 px-2">
            What we do
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-11 lg:w-[914px] w-[100%]  container justify-center mt-[5rem] container mx-auto gap-y-0 gap-x-0">
        {productsData.map((item, index) => {
          return (
            <motion.div
              className={`product-container group  relative border-l pb-[3rem] border-white/20 p-6
                    ${index < 4 ? "lg:border-t" : ""}
                    ${(index + 1) % 4 === 0 ? "lg:border-r" : ""}
                    ${screenWidth < 768 ? "border-r border-t" : ""}
                      
                `}
              initial="rest"
              whileHover="hover"
            >
              {/* Animated Top Border */}
              <motion.div
                className="absolute top-0 left-0 h-[5px] bg-[#C78C24]"
                variants={{
                  rest: {
                    width: 0,
                  },
                  hover: {
                    width: "100%",
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              />

              <div className="product-name text-[20px] mb-[3rem]">
                {item.name}
              </div>

              <div className="proudct-description text-[#FFFFFF66] line-clamp-2 font-bold group-hover:-translate-y-2 duration-300">
                {item.data}
              </div>

              <BsArrowRightCircleFill className="text-[#FFFFFF66] mt-5 group-hover:text-[#C78C24] group-hover:scale-250 duration-300" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default WhatWeDo;
