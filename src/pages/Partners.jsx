import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";
import partnerImage1 from "../assets/partner_image1.png";
import partnerImage2 from "../assets/partner_image2.png";
import partnerImage3 from "../assets/partner_image3.png";

const Partners = () => {
  return (
    <div>
      <SectionTitle title="Partners" path="Home | Partners" />
      <div className="partners-content text-center max-w-2xl mx-auto mt-5">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">Our Trusted Partners</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
              Amber Fabrics : Our first partner is a leading supplier of high-quality fabrics. Their commitment to sustainable sourcing and innovation has helped us maintain our standards of excellence.
            </p>
            <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content mt-5">
              FutureWear : Our second partner specializes in state-of-the-art manufacturing processes. They ensure that our garments are produced efficiently and to the highest quality standards.
            </p>
            <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content mt-5">
              Johnson Logistics Inc: Our third partner is a logistics company that provides fast and reliable shipping solutions. Their extensive network ensures that our products reach customers worldwide in a timely manner.
            </p>
            <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us for Details</Link>
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0 md:ml-5 flex flex-col items-center">
            <img src={partnerImage1} alt="Partner 1" className="rounded-lg shadow-lg border-4 border-gray-200 mb-5" />
            <img src={partnerImage2} alt="Partner 2" className="rounded-lg shadow-lg border-4 border-gray-200 mb-5" />
            <img src={partnerImage3} alt="Partner 3" className="rounded-lg shadow-lg border-4 border-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
