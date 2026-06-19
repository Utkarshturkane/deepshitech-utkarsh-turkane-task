import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import Blogs from "../components/Home/Blogs";
import ContactForm from "../components/Home/ContactForm";
import OurTeam from "../components/Home/OurTeam";
import Testimonials from "../components/Home/Testimonials";
import WhatWeDo from "../components/Home/WhatWeDo";

function HomePage() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <WhatWeDo />
      <OurTeam />
      <Testimonials />
      <Blogs />
      <ContactForm />
    </div>
  );
}

export default HomePage;
