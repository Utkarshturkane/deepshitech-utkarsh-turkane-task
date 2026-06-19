import Button from "../Button";

import { motion } from "framer-motion";

function OurTeam() {
  const teamMember = [
    {
      name: "Deepak Sharma",
      designation: "Founder & CEO",
      imgUrl: "/images/deep-ceo.webp",
    },
    {
      name: "Gul Patwa",
      designation: "COO",
      imgUrl: "/images/gul-coo.webp",
    },
    {
      name: "Jyoti Sharma",
      designation: "HR & BD Head",
      imgUrl: "/images/jyoti.webp",
    },
    {
      name: "Aditya Chikhalekar",
      designation: "Media Head",
      imgUrl: "/images/Aditya.webp",
    },
  ];

  return (
    <div className="lg:pt-[120px] pt-[90px] mx-auto container lg:pb-[30px] pb-[80px] lg:px-40 px-[30px] grid lg:grid-cols-4 grid-col-1 lg:gap-40 gap-10 justify-center">
      <div className="col-span-2">
        <div className="ourteam-heading lg:text-[68px] text-[36px] flex lg:flex-col flex-row gap-3 lg:gap-0 leading-20 lg:mb-[60px] mb-[20px]">
          <span> Meet</span> <span> Our</span> <span>Team</span>
        </div>
        <div className="ourteam-content text-[#00000080]">
          <p className="mb-[30px]">
            We are talented individuals who are passionate about bringing ideas
            to life. With a diverse range of backgrounds and skill sets, we
            collaborate to produce effective solutions for our clients.
          </p>
          <p className="mb-[60px]">
            Together, our creative team is committed to delivering impactful
            work that exceeds expectations.
          </p>
          <Button primary className="mb-[50px]">
            Read More
          </Button>

          <div className="tag-line text-[24px] text-[#000]">
            We <span className="text-[#000]">delivering</span> <br />{" "}
            exceptional
            <span className="text-[#000]">results.</span>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-[90px] gap-x-[0px] gap-y-[30px] w-[100%] relative">
          <svg
            width="250"
            viewBox="0 0 300 1404"
            fill="#00000080"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[250px] absolute z-0 top-[-15%] left-[-120px] opacity-20 lg:block hidden"
          >
            <motion.g
              animate={{
                y: [-75, 75, -75],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
                className="stroke-current text-[#0000000b]"
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
                className="stroke-current text-[#0000000b]"
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
                className="stroke-current text-[#0000000b]"
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M300 1175H0V1174H300V1175Z"
                className="stroke-current text-[#0000000b]"
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
                className="stroke-current text-[#0000000b]"
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
                className="stroke-current text-[#0000000b]"
              />
            </motion.g>

            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
            />

            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
            />
          </svg>
          {teamMember.map((item, index) => {
            return (
              <div className="relative">
                {index == 1 ? (
                  <p className="text-[#00000080] text-[15px] mb-2 lg:block hidden">
                    {" "}
                    <span className="text-[#C78C74]">*</span> The founders of
                    our organization{" "}
                  </p>
                ) : (
                  ""
                )}

                <motion.div
                  className={`relative lg:w-[220px] w-3xs h-[290px] overflow-hidden group team-photo ${index == 2 ? "lg:mt-[-50px]" : ""}`}
                  initial="rest"
                  whileHover="hover"
                  key={index}
                >
                  <img
                    src={item.imgUrl}
                    className="lg:w-full lg:h-full object-cover object-top w-3xs"
                    alt=""
                  />

                  <motion.div
                    className="absolute inset-0 bg-black"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 0.7 },
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-end pb-10"
                    variants={{
                      rest: { opacity: 0, y: 30 },
                      hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="hover:text-[#C78C24] text-[#fff] text-[20px] cursor-pointer text-3xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-[12px] font-bold text-white/60 uppercase tracking-[2px]">
                      {item.designation}
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[4px] bg-[#C78C24]"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
