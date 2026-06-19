import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="lg:pt-[120px] pt-[90px] mx-auto container lg:pb-[30px] pb-[80px] lg:px-40 px-[30px] grid lg:grid-cols-2 grid-col-1 lg:gap-40 gap-10">
      <div className="">
        <div className="lg:text-[68px] text-[36px] aboutus-heading lgleading-20 leading-normal">
          Discover <br className="lg:block hidden" /> Our
          <br className="lg:block hidden" /> <span> Company</span>
        </div>
        <div className="mt-6 text-[#00000080] content-aboutus">
          <p>
            Welcome to Deepshitech, the perfect of innovation and superior
            quality in the sphere of (Advertising &amp; Tech). Our organization
            is headed and controlled through our Founder &amp; CEO Deepak
            Sharma. We are committed to bringing visions of your brand to
            lifestyles.
          </p>
          <p>Organization established in Mumbai, the city that never sleeps.</p>
          <h6 className="text-[#000] font-bold my-3">ABOUT US</h6>
          <p>
            At Deepshitech, we are dedicated to providing innovative and cutting
            edge Advertising & technology solutions that empower businesses to
            succeed in a rapidly evolving digital world. With a focus on
            excellence, quality, and client satisfaction, we specialize in
            delivering a wide range of services, including Online & Offline,
            Founded on the principles of integrity, creativity, and
            collaboration, Deepshitech leverages the latest tools and
            technologies to build customized solutions tailored to the unique
            needs of each client. Whether you are looking to establish a strong
            online presence, streamline business operations, or drive
            conversions through highly optimized landing pages, our team is here
            to support your vision and help you achieve your goals. Our approach
            is client centric everything we do is focused on delivering
            measurable results that make a real difference. From small
            businesses to large enterprises, we work closely with our clients to
            understand their challenges, provide actionable insights, and
            deliver results that exceed expectations. At Deepshitech, we are
            more than just a service provider. We are a trusted partner,
            committed to helping you navigate the complexities of the digital
            landscape and achieve sustained growth in your industry.{" "}
          </p>
          <h6 className="text-[#000] font-bold mt-2 mb-3">Our Core Values</h6>
          <p>
            <b>Innovation:</b> Constantly exploring new technologies and
            solutions to stay ahead of the curve.
          </p>
          <p>
            <b>Quality:</b>
            Delivering top-notch services that adhere to the highest standards.
          </p>
          <p>
            <b>Collaboration:</b>
            Working closely with clients to ensure their success at every step.
          </p>
          <p>
            <b>Integrity:</b>
            Building lasting relationships based on trust and transparency.
          </p>
          <p>
            Let Deepshitech be your partner in progress. Together, we can unlock
            new possibilities and take your business to the next level.
          </p>
        </div>
        <div className="flex justify-between items-center mt-3 lg:gap-8 gap-3">
          <div className="relative basis-1/4">
            <img
              src="/images/2.webp"
              className="rounded-[50%] lg:w-[90px] w-[80px] lg:h-[90px] h-[70px] object-cover object-top"
              alt=""
            />
            <span
              className="after:content-['\&quot;'] after:absolute after:bottom-0 after:right-2 after:w-[30px] after:h-[30px] after:rounded-full after:bg-[#C78C24] after:flex after:justify-center after:items-center after:pt-[12px] after:text-[36px] after:text-black
                "
            ></span>
          </div>
          <div className="basis-3/4 lg:text-[18px] text-[15px] passionately text-[#00000080]">
            <b className="text-[#000]">Passionately Creating </b>Design Wonders:{" "}
            <b className="text-[#000]"> Unleashing </b>
            Boundless Creativity
          </div>
        </div>
      </div>
      <div className="relative">
        <svg
          width="250"
          viewBox="0 0 300 1404"
          fill="#00000080"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[250px] absolute z-0 top-[15%] left-[-60px] opacity-20 lg:block hidden"
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
        <div className="lg:mt-[390px] mt-[0px] relative z-1">
          <img src="/images/12.gif" className="w-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
