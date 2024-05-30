import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";
import shippingPolicyImage1 from "../assets/shipping_policy_image1.png";
import shippingPolicyImage2 from "../assets/shipping_policy_image2.png";
import shippingPolicyImage3 from "../assets/shipping_policy_image3.png";

const ShippingPolicy = () => {
  return (
    <div>
      <SectionTitle title="Shipping Policy" path="Home | Shipping Policy" />
      <div className="shipping-policy-content text-center max-w-2xl mx-auto mt-5">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">Anton Garments Inc Shipping Policy</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
              Here at Anton Garments Inc, we aim to provide our customers with fast and reliable shipping. All orders are processed within 2-3 business days. You will receive a shipment confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours. Delivery delays can occasionally occur.
            </p>
            <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content mt-5">
              Shipping rates & delivery estimates: Shipping charges for your order will be calculated and displayed at checkout.
            </p>
            <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content mt-5">
              Return & Refund Policy: Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
            </p>
            <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us For More Info</Link>
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0 md:ml-5 flex flex-col items-center">
            <img src={shippingPolicyImage1} alt="Shipping Policy" className="rounded-lg shadow-lg border-4 border-gray-200 mb-5" />
            <img src={shippingPolicyImage2} alt="Shipping Policy" className="rounded-lg shadow-lg border-4 border-gray-200 mb-5" />
            <img src={shippingPolicyImage3} alt="Shipping Policy" className="rounded-lg shadow-lg border-4 border-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
