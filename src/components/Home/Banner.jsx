import Button from "../Button";
import { motion, useScroll, useTransform } from "framer-motion";

function Banner() {
  const { scrollY } = useScroll();

  const rotate = useTransform(scrollY, [0, 2000], [0, 360]);

  return (
    <div className="lg:pt-[120px] pt-[80px] pb-[30px] bg-black text-[#FFFFFFE6] h-[100vh] w-[100%] px-[30px] lg:px-0">
      <div className="mx-auto lg:w-[70%] w-[100%]">
        <div className=" lg:text-[72px] text-[30px] font-extralight banner-heading lg:leading-[90px]">
          <span className="font-normal">Designing</span> a Better <br />
          <span> World</span> Today
        </div>
        <p className="text-[#ffffff66] lg:w-[40%] w-[90%] mt-[3rem]">
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where dreams become
          tangible realities.
        </p>

        <div className="mt-[3rem] flex flex-col lg:flex-row">
          <Button primary className="w-[220px]">
            What we do
          </Button>
          <Button secondary className="w-[220px]">
            View Works
          </Button>
        </div>

        <div className="absolute right-[18%] bottom-[10%] uppercase text-[#fff] hidden lg:block">
          <motion.svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
            className="mil-ct-svg mil-rotate"
            data-value="360"
            style={{
              rotate,
              scale: 4,
              transformOrigin: "50% 50%",
            }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>

            <circle cx="150" cy="100" r="75" fill="none" />

            <g>
              <use xlinkHref="#circlePath" fill="none" />

              <text style={{ letterSpacing: "6.5px" }}>
                <textPath
                  fill="#ffffff66"
                  fontSize="12"
                  xlinkHref="#circlePath"
                  className="hover:fill-white"
                >
                  Scroll down - Scroll down -
                </textPath>
              </text>
            </g>
          </motion.svg>
          <Button
            primary
            className="rounded-[50%] rotate-90 w-[70px] h-[70px] flex justify-center items-center relative top-[-68px]"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
