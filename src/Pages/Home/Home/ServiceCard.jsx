/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai"

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex card-actions items-center">
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <Link to={`/checkout/${_id}`} className="btn text-orange-500 bg-transparent border-none">
           <span className="text-xs text-black">Book Now</span> <AiOutlineArrowRight/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
