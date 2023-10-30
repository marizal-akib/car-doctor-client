/* eslint-disable react/prop-types */
import {AiOutlineArrowRight} from "react-icons/ai"

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex card-actions items-center">
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <button className="btn bg-transparent border-none">
            <AiOutlineArrowRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;